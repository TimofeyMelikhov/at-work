import { ReactNode, memo } from 'react'

import classes from 'src/components/ui/defaultButton/defaultButton.module.scss'

interface IButtonProps {
	children: ReactNode
	onClick: () => void
}

export const DefaultButton = memo(({ children, onClick }: IButtonProps) => {
	return (
		<button className={classes.defaultBtn} onClick={onClick}>
			{children}
		</button>
	)
})
