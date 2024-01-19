import { Outlet } from 'react-router-dom'

import { Header } from 'src/components/header/Header'

import classes from './layout.module.scss'

export const Layout = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<div className={classes.container}>
				<Outlet />
			</div>
		</>
	)
}
