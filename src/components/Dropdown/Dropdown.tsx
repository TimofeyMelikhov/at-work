import { useState } from 'react'

import classes from 'src/components/Dropdown/dropdown.module.scss'

type DropdownProps = {
	options: string[]
}

export const Dropdown = ({ options }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (option: string) => {
		console.log(`Выбран пункт: ${option}`)
		setIsOpen(false)
	}

	return (
		<div className={classes.dropdown}>
			<div className={classes.dropdown__trigger} onClick={toggleDropdown}>
				<div className={`${classes.dots} ${isOpen ? classes.dots__tap : ''}`} />
			</div>
			{isOpen && (
				<div className={classes.dropdown__menu}>
					{options.map(option => (
						<div
							key={option}
							className={classes.dropdown__option}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
