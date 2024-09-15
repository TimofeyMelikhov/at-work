import { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hook/redux'
import { setUsers } from 'src/store/slices/userSlice'
import { useGetUsersQuery } from 'src/store/user.api'

import { Card } from 'src/components/card/Card'

import classes from 'src/pages/main/mainPage.module.scss'

export const MainPage: React.FC = memo(() => {
	const dispatch = useAppDispatch()
	const { data, isLoading } = useGetUsersQuery()
	const users = useAppSelector(state => state.users.users)

	const archiveUsers = useAppSelector(state => state.users.archivedUsers)

	useEffect(() => {
		if (data && !users.length) {
			dispatch(setUsers(data))
		}
	}, [data, dispatch])

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
								cardId={id}
							/>
						)
					)}
				</div>
			) : (
				<div>Загрузка...</div>
			)}
			<div className={classes.titleSection}>Архив</div>
			<div style={{ paddingBottom: '20px' }}>
				{!!archiveUsers.length && (
					<div className={classes.cardSection}>
						{archiveUsers?.map(
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
									cardId={id}
								/>
							)
						)}
					</div>
				)}
			</div>
		</>
	)
})
