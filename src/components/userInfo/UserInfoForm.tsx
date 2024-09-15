import { memo, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hook/redux'
import { IUser } from 'src/models/IUsersModel'
import { updateUserData } from 'src/store/slices/userSlice'

import { DefaultButton } from 'src/components/ui/defaultButton/DefaultButton'
import { TextField } from 'src/components/ui/textField/TextField'
import classes from 'src/components/userInfo/userInfoForm.module.scss'

interface IUserInfoFormProps {
	setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserInfoForm = memo(({ setModalActive }: IUserInfoFormProps) => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => state.users.selectedUser)

	const [name, setName] = useState<string>(user?.name || '')
	const [username, setUsername] = useState<string>(user?.username || '')
	const [email, setEmail] = useState<string>(user?.email || '')
	const [city, setCity] = useState<string>(user?.address?.city || '')
	const [phone, setPhone] = useState<string>(user?.phone || '')
	const [companyName, setCompanyName] = useState<string>(
		user?.company?.name || ''
	)

	useEffect(() => {
		setName(user?.name || '')
		setUsername(user?.username || '')
		setEmail(user?.email || '')
		setCity(user?.address?.city || '')
		setPhone(user?.phone || '')
		setCompanyName(user?.company?.name || '')
	}, [user, dispatch])

	const handleSaveChanges = () => {
		if (user) {
			const updatedUser: IUser = {
				...user,
				name,
				username,
				email,
				address: {
					...user.address,
					city
				},
				phone,
				company: {
					...user.company,
					name: companyName
				}
			}
			dispatch(updateUserData(updatedUser))
			setModalActive(true)
		}
	}

	return (
		<>
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
		</>
	)
})
