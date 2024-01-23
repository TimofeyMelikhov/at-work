import userPhoto from 'src/assets/img/user_photo.png'

import classes from 'src/components/card/card.module.scss'

import { Dropdown } from '../Dropdown/Dropdown'

interface ICardProp {
	username: string
	city: string
	companyName: string
	cardId: number
}

export const Card = ({ username, city, companyName, cardId }: ICardProp) => {
	return (
		<div className={classes.card}>
			<div className={classes.card__photo}>
				<img src={userPhoto} alt='user photo' />
			</div>
			<div className={classes.card__info}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<div className={classes.info__username}>{username}</div>
					<Dropdown cardId={cardId} isArchived={true} />
				</div>
				<div className={classes.info__companyName}>{companyName}</div>
				<div className={classes.info__city}>{city}</div>
			</div>
		</div>
	)
}
