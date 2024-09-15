import { ChangeEvent, memo, useRef } from 'react'

import classes from 'src/components/ui/textField/textField.module.scss'

interface ITextFieldProps {
	inputValue: string
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextField = memo(
	({ inputValue, onChangeHandler }: ITextFieldProps) => {
		const inputRef = useRef<HTMLInputElement>(null)

		const resetInput = (): void => {
			onChangeHandler({
				target: { value: '' }
			} as ChangeEvent<HTMLInputElement>)

			if (inputRef.current) {
				inputRef.current.focus()
			}
		}

		return (
			<>
				<div className={classes.inputWrapper}>
					<input
						type='text'
						value={inputValue}
						onChange={onChangeHandler}
						ref={inputRef}
					/>
					<div className={classes.resetInput} onClick={resetInput} />
				</div>
			</>
		)
	}
)
