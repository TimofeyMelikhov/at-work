import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from './slices/userSlice'
import { usersApi } from './user.api'

const redusers = {
	[usersApi.reducerPath]: usersApi.reducer,
	userSlice
}

export const store = configureStore({
	reducer: redusers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
