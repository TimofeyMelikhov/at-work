import React from 'react'

import classes from 'src/components/ui/textField/textField.module.scss'

interface ITextFieldProps {
	inputValue: string
	onChange: (value: string) => void
}

export const TextField = ({ inputValue, onChange }: ITextFieldProps) => {
	let resetInput = (event: React.MouseEvent<HTMLInputElement>): void => {
		event.currentTarget.value = ''
	}

	return (
		<>
			<div className={classes.inputWrapper}>
				<input
					type='text'
					value={inputValue}
					onChange={e => onChange(e.target.value)}
				/>
				<div className={classes.resetInput} onClick={resetInput} />
			</div>
		</>
	)
}
