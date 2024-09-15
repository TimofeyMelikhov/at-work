import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import fotoProfile from 'src/assets/img/FotoProfile.png'
import success from 'src/assets/img/Icon.svg'

import { Tabs } from 'src/components/tabs/Tabs'
import { Modal } from 'src/components/ui/modal/Modal'
import { UserInfoForm } from 'src/components/userInfo/UserInfoForm'

import classes from 'src/pages/userSetting/userSetting.module.scss'

export const UserSetting = memo(() => {
	const [modalActive, setModalActive] = useState<boolean>(false)
	const [activeTab, setActiveTab] = useState<string>('profileData')

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
					<div className={classes.container__menu_photo}>
						<img src={fotoProfile} alt='' />
					</div>
					<Tabs
						active={activeTab}
						clickHandler={currentTab => setActiveTab(currentTab)}
					/>
				</div>
				<div className={classes.container__info}>
					{activeTab === 'profileData' && (
						<>
							<div className={classes.info__title}>Данные профиля</div>
							<UserInfoForm setModalActive={setModalActive} />
						</>
					)}
					{activeTab === 'workingSpace' && (
						<>
							<div className={classes.info__title}>Рабочее пространство</div>
						</>
					)}
					{activeTab === 'privacy' && (
						<>
							<div className={classes.info__title}>Приватность</div>
						</>
					)}
					{activeTab === 'safety' && (
						<>
							<div className={classes.info__title}>Безопасность</div>
						</>
					)}
				</div>
			</div>
		</>
	)
})
