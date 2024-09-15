import cn from 'clsx'
import { memo } from 'react'

import classes from 'src/components/tabs/tabs.module.scss'

interface ITabsProps {
	active?: string
	clickHandler: React.Dispatch<React.SetStateAction<string>>
}

export const Tabs = memo(({ active, clickHandler }: ITabsProps) => {
	const menuItem = [
		{
			title: 'Данные профиля',
			tabLink: 'profileData'
		},
		{
			title: 'Рабочее пространство',
			tabLink: 'workingSpace'
		},
		{
			title: 'Приватность',
			tabLink: 'privacy'
		},
		{
			title: 'Безопасность',
			tabLink: 'safety'
		}
	]

	return (
		<div className={classes.tabs}>
			{menuItem.map((item, index) => (
				<div
					key={index}
					className={cn(classes.tabs__item, {
						[classes.tabs__item_active]: active === item.tabLink
					})}
					onClick={() => clickHandler(item.tabLink)}
				>
					{item.title}
				</div>
			))}
		</div>
	)
})
