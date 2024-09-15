import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from 'src/models/IUsersModel'

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/'
	}),
	endpoints: build => ({
		getUsers: build.query<IUser[], void>({
			query: () => ({
				url: `/users/?_limit=6`
			})
		})
	})
})

export const { useGetUsersQuery } = usersApi
