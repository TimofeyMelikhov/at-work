import cn from 'clsx'

import classes from 'src/components/tabs/tabs.module.scss'

interface ITabsProps {
	active?: string
	clickHandler: React.Dispatch<React.SetStateAction<string>>
}

export const Tabs = ({ active, clickHandler }: ITabsProps) => {
	const menuItem = [
		{
			title: 'Данные профиля',
			tab: 'profileData'
		},
		{
			title: 'Рабочее пространство',
			tab: 'workingSpace'
		},
		{
			title: 'Приватность',
			tab: 'privacy'
		},
		{
			title: 'Безопасность',
			tab: 'safety'
		}
	]

	return (
		<div className={classes.tabs}>
			{menuItem.map((item, index) => (
				<div
					key={index}
					className={cn(classes.tabs__item, {
						[classes.tabs__item_active]: active === item.tab
					})}
					onClick={() => clickHandler(item.tab)}
				>
					{item.title}
				</div>
			))}
		</div>
	)
}
