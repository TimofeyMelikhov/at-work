import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hook/redux'
import { updateUserData } from 'src/store/slices/userSlice'

import { DefaultButton } from 'src/components/ui/defaultButton/DefaultButton'
import { TextField } from 'src/components/ui/textField/TextField'

import classes from 'src/pages/userSetting/userSetting.module.scss'

export const UserSetting = () => {
	const user = useAppSelector(state => state.users.selectedUser)
	const [editedUser, setEditedUser] = useState<any>(null)
	const dispatch = useAppDispatch()

	console.log(user)

	const handleInputChange = (field: string, value: string) => {
		setEditedUser((prevUser: any) => ({
			...prevUser,
			[field]: value
		}))
	}

	useEffect(() => {
		setEditedUser(user)
	}, [user])

	const handleSaveChanges = () => {
		dispatch(updateUserData(editedUser))
	}

	return (
		<>
			<Link to='/' className={classes.link}>
				<div className={classes.header}>
					<div className={classes.header__icon}></div>
					<div className={classes.header__text}> Назад </div>
				</div>
			</Link>

			<DefaultButton onClick={handleSaveChanges}>Сохранить</DefaultButton>
			<TextField
				inputValue={editedUser?.name}
				onChange={value => handleInputChange('name', value)}
			/>
			<TextField
				inputValue={editedUser?.username}
				onChange={value => handleInputChange('username', value)}
			/>
			<TextField
				inputValue={editedUser?.email}
				onChange={value => handleInputChange('email', value)}
			/>
			<TextField
				inputValue={editedUser?.address?.city}
				onChange={value => handleInputChange('address', value)}
			/>
			<TextField
				inputValue={editedUser?.phone}
				onChange={value => handleInputChange('phone', value)}
			/>
			<TextField
				inputValue={editedUser?.company?.name}
				onChange={value => handleInputChange('company', value)}
			/>
		</>
	)
}
