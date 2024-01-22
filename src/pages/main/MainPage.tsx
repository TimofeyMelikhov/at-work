import { useGetUsersQuery } from 'src/store/user.api'

import { Card } from 'src/components/card/Card'

import classes from 'src/pages/main/mainPage.module.scss'

export const MainPage: React.FC = () => {
	const { data: users, isLoading } = useGetUsersQuery()

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className={classes.titleSection}>Активные</div>
			<div className={classes.cardSection}>
				{users?.map(({ username, id }) => (
					<Card key={id} username={username} />
				))}
			</div>
		</>
	)
}
