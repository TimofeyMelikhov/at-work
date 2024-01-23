import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/models/IUsersModel'

interface UserState {
	users: IUser[]
	selectedUser: IUser | null
}

const initialState: UserState = {
	users: [] as IUser[],
	selectedUser: null
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<IUser[]>) {
			state.users = action.payload
		},
		selectUser: (state, action: PayloadAction<number>) => {
			state.selectedUser =
				state.users.find(user => user.id === action.payload) || null
		},
		updateUserData: (state, action: PayloadAction<IUser[]>) => {
			if (state.selectedUser) {
				state.selectedUser = { ...state.selectedUser, ...action.payload }
			}
		}
	}
})

export default userSlice.reducer
export const { setUsers, selectUser, updateUserData } = userSlice.actions
