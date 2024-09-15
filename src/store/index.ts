import { configureStore } from '@reduxjs/toolkit'

import userSlice from './slices/userSlice'
import { usersApi } from './user.api'

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		users: userSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
