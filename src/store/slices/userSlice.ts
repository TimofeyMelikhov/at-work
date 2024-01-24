import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/models/IUsersModel'

interface UserState {
	users: IUser[]
	selectedUser: IUser | null
	archivedUsers: IUser[]
}

const initialState: UserState = {
	users: [] as IUser[],
	selectedUser: null,
	archivedUsers: [] as IUser[]
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
		},
		filteredUsers: (state, action: PayloadAction<number>) => {
			state.users = state.users.filter(item => item.id !== action.payload)
		},
		userToArchive: (state, action: PayloadAction<number>) => {
			const userId = action.payload
			const userIndex = state.users.findIndex(user => user.id === userId)

			if (userIndex !== -1) {
				const archivedUser = state.users.splice(userIndex, 1)[0]
				archivedUser.id = userIndex
				state.archivedUsers.push(archivedUser)
			}
		},
		activateUser: (state, action: PayloadAction<number>) => {
			const userId = action.payload
			const userIndex = state.archivedUsers.findIndex(
				user => user.id === userId
			)

			if (userIndex !== -1) {
				const activatedUser = state.archivedUsers.splice(userIndex, 1)[0]
				state.users.splice(activatedUser.id, 0, activatedUser)
			}
		}
	}
})

export default userSlice.reducer
export const {
	setUsers,
	selectUser,
	updateUserData,
	filteredUsers,
	userToArchive,
	activateUser
} = userSlice.actions
