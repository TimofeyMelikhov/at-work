import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fotoProfile from 'src/assets/img/FotoProfile.png'
import success from 'src/assets/img/Icon.svg'
import { useAppDispatch, useAppSelector } from 'src/hook/redux'
import { IUser } from 'src/models/IUsersModel'
import { updateUserData } from 'src/store/slices/userSlice'

import { DefaultButton } from 'src/components/ui/defaultButton/DefaultButton'
import { Modal } from 'src/components/ui/modal/Modal'
import { TextField } from 'src/components/ui/textField/TextField'

import classes from 'src/pages/userSetting/userSetting.module.scss'

export const UserSetting = () => {
	const [modalActive, setModalActive] = useState<boolean>(false)

	const user = useAppSelector(state => state.users.selectedUser)
	const dispatch = useAppDispatch()

	const [name, setName] = useState(user?.name || '')
	const [username, setUsername] = useState(user?.username || '')
	const [email, setEmail] = useState(user?.email || '')
	const [city, setCity] = useState(user?.address?.city || '')
	const [phone, setPhone] = useState(user?.phone || '')
	const [companyName, setCompanyName] = useState(user?.company?.name || '')

	useEffect(() => {
		setName(user?.name || '')
		setUsername(user?.username || '')
		setEmail(user?.email || '')
		setCity(user?.address?.city || '')
		setPhone(user?.phone || '')
		setCompanyName(user?.company?.name || '')
	}, [user, dispatch])

	const handleSaveChanges = () => {
		const updatedUser: IUser = {
			...user,
			name,
			username,
			email,
			address: {
				...user?.address,
				city
			},
			phone,
			company: {
				...user?.company,
				name: companyName
			}
		}
		dispatch(updateUserData(updatedUser))
		setModalActive(true)
	}

	const menuItem = [
		'Данные профиля',
		'Рабочее пространство',
		'Приватность',
		'Безопасность'
	]

	return (
		<>
			<Link to='/' className={classes.link}>
				<div className={classes.header}>
					<div className={classes.header__icon}></div>
					<div className={classes.header__text}> Назад </div>
				</div>
			</Link>

			<Modal active={modalActive} setActive={setModalActive}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<div>
						<img src={success} alt='' />
					</div>
					<div style={{ paddingTop: '20px' }}>Изменения сохранены!</div>
				</div>
			</Modal>

			<div className={classes.container}>
				<div className={classes.container__menu}>
					<div>
						<img src={fotoProfile} alt='' />
					</div>
					<div className={classes.menu__item}>
						{menuItem.map(item => (
							<div> {item} </div>
						))}
					</div>
				</div>
				<div className={classes.container__info}>
					<div className={classes.info__title}>Данные профиля</div>
					<div>
						<div className={classes.info__label}>Имя</div>
						<TextField
							inputValue={name}
							onChangeHandler={e => setName(e.target.value)}
						/>
					</div>
					<div>
						<div className={classes.info__label}>Никнейм</div>
						<TextField
							inputValue={username}
							onChangeHandler={e => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<div className={classes.info__label}>Почта</div>
						<TextField
							inputValue={email}
							onChangeHandler={e => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<div className={classes.info__label}>Город</div>
						<TextField
							inputValue={city}
							onChangeHandler={e => setCity(e.target.value)}
						/>
					</div>
					<div>
						<div className={classes.info__label}>Телефон</div>
						<TextField
							inputValue={phone}
							onChangeHandler={e => setPhone(e.target.value)}
						/>
					</div>
					<div>
						<div className={classes.info__label}>Название компании</div>
						<TextField
							inputValue={companyName}
							onChangeHandler={e => setCompanyName(e.target.value)}
						/>
					</div>
					<div className={classes.info_button}>
						<DefaultButton onClick={handleSaveChanges}>Сохранить</DefaultButton>
					</div>
				</div>
			</div>
		</>
	)
}
