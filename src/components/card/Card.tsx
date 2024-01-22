interface ICardProp {
	username: string
}

export const Card = ({ username }: ICardProp) => {
	return <div>{username}</div>
}
