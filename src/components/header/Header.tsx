import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import foto from 'src/assets/img/Foto.png'

import classes from 'src/components/header/header.module.scss'

export const Header = memo(() => {
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate('/')
	}

	return (
		<nav className={classes.header}>
			<div className={classes.header__content}>
				<div className={classes.leftSection} onClick={clickHandler}>
					<div className={classes.leftSection__logo}></div>
					<div className={classes.leftSection__title}>
						at-<span>work</span>
					</div>
				</div>
				<div className={classes.rightSection}>
					<div className={classes.rightSection__favorites}></div>
					<div className={classes.rightSection__notification}></div>
					<div
						className={classes.rightSection__avatar}
						style={{ backgroundImage: `url(${foto})` }}
					/>
					<div className={classes.rightSection__nickname}>user</div>
				</div>
			</div>
		</nav>
	)
})
