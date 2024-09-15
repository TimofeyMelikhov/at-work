import cn from 'clsx'
import { ReactNode, memo, useEffect } from 'react'

import classes from 'src/components/ui/modal/modal.module.scss'

interface IModalProps {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	children: ReactNode
}

export const Modal = memo(({ active, setActive, children }: IModalProps) => {
	useEffect(() => {
		setTimeout(() => {
			setActive(false)
		}, 4000)
	}, [active])

	return (
		<div
			className={cn(classes.modal, {
				[classes.active]: active
			})}
		>
			<div className={classes.modal__content}>
				<div
					className={classes.modal__close}
					onClick={() => setActive(false)}
				/>
				{children}
			</div>
		</div>
	)
})
