import React, { memo } from 'react'

export const NotFound: React.FC = memo(() => {
	return (
		<div>
			<img src='https://http.cat/404' alt='' />
			<div>NotFound</div>
		</div>
	)
})
