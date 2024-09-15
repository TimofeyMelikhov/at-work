import { memo } from 'react'
import userPhoto from 'src/assets/img/user_photo.png'
import { useAppSelector } from 'src/hook/redux'

import classes from 'src/components/card/card.module.scss'

import { Dropdown } from '../Dropdown/Dropdown'

interface ICardProp {
	username: string
	city: string
	companyName: string
	cardId: number
}

export const Card = memo(
	({ username, city, companyName, cardId }: ICardProp) => {
		const archiveUsers = useAppSelector(state => state.users.archivedUsers)

		const isArchived = archiveUsers.some(user => user.id === cardId)

		return (
			<div className={classes.card}>
				<div
					className={`${classes.card__photo} ${isArchived ? classes.card__photo_gray : ''}`}
				>
					<img src={userPhoto} alt='user photo' />
				</div>
				<div className={classes.card__info}>
					<div className={classes.card__header}>
						<div
							className={`${classes.info__username} ${isArchived ? classes.info__username_gray : ''}`}
						>
							{username}
						</div>
						<Dropdown cardId={cardId} />
					</div>
					<div
						className={`${classes.info__companyName} ${isArchived ? classes.info__companyName_gray : ''}`}
					>
						{companyName}
					</div>
					<div
						className={`${classes.info__city} ${isArchived ? classes.info__city_gray : ''}`}
					>
						{city}
					</div>
				</div>
			</div>
		)
	}
)
