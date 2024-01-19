import { Link } from 'react-router-dom'

import classes from 'src/components/header/header.module.scss'

export const Header = () => {
	return (
		<div className={classes.box}>
			<div className={classes.container}>
				<div className={classes.logoTitle}>
					<Link to='/'>
						<div className={classes.container__logo}></div>
						<div>at-work</div>
					</Link>
				</div>
				<div>info</div>
			</div>
		</div>
	)
}
