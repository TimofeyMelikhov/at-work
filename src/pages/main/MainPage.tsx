import { useGetUsersQuery } from 'src/store/user.api'

import { Card } from 'src/components/card/Card'

import classes from 'src/pages/main/mainPage.module.scss'

export const MainPage: React.FC = () => {
	const { data: users, isLoading } = useGetUsersQuery()

	const arhive = [] as string[]

	return (
		<>
			<div className={classes.titleSection}>Активные</div>
			{!isLoading ? (
				<div className={classes.cardSection}>
					{users?.map(
						({
							id,
							username,
							address: { city },
							company: { name: companyName }
						}) => (
							<Card
								key={id}
								username={username}
								city={city}
								companyName={companyName}
							/>
						)
					)}
				</div>
			) : (
				<div>Загрузка</div>
			)}
			<div className={classes.titleSection}>Архив</div>
			{arhive.length && (
				<div className={classes.cardSection}>{arhive?.map(() => <Card />)}</div>
			)}
		</>
	)
}
