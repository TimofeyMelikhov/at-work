import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from 'src/components/layout/Layout'

import { MainPage } from 'src/pages/main/MainPage'
import { NotFound } from 'src/pages/notFound/NotFound'
import { UserSetting } from 'src/pages/userSetting/UserSetting'

function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='/user/:id' element={<UserSetting />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
