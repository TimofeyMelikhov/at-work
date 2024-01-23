import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './assets/style/index.scss'
import { setupStore } from './store/index.ts'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
