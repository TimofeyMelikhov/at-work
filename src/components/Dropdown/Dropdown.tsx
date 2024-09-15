import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/hook/redux'
import {
	activateUser,
	filteredUsers,
	selectUser,
	userToArchive
} from 'src/store/slices/userSlice'

import classes from 'src/components/Dropdown/dropdown.module.scss'

type DropdownProps = {
	cardId: number
}

export const Dropdown = memo(({ cardId }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const archiveUsers = useAppSelector(state => state.users.archivedUsers)
	const navigate = useNavigate()

	const isArchived = archiveUsers.some(user => user.id === cardId)

	const options = isArchived
		? ['Активировать']
		: ['Редактировать', 'Архивировать', 'Скрыть']

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (option: string) => {
		switch (option) {
			case 'Скрыть':
				dispatch(filteredUsers(cardId))
				break
			case 'Архивировать':
				dispatch(userToArchive(cardId))
				break
			case 'Редактировать':
				dispatch(selectUser(cardId))
				navigate(`/user/${cardId}`)
				break
			case 'Активировать':
				dispatch(activateUser(cardId))
				break
			default:
				break
		}
		setIsOpen(false)
	}

	return (
		<div className={classes.dropdown}>
			<div className={classes.dropdown__trigger} onClick={toggleDropdown}>
				<div className={`${classes.dots} ${isOpen ? classes.dots__tap : ''}`} />
			</div>
			{isOpen && (
				<div className={classes.dropdown__menu}>
					{options.map(option => (
						<div
							key={option}
							className={classes.dropdown__option}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
})
