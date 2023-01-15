import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';
import api from '../../api/users/index';

interface userState {
	users: User[];
	isLoading: Boolean;
	hasError: Boolean;
	errorMessage: string;
	profileModalOpen: Boolean;
}

const initialState = {
	users: [],
	isLoading: false,
	hasError: false,
	errorMessage: '',
	profileModalOpen: false,
} as userState;

export const getAllUsers = createAsyncThunk('users/all', async (payload, { rejectWithValue }) => {
	try {
		return api.getAllUsers();
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		searchUsers: (state, action: PayloadAction<string>) => {
			return {
				...state,
				users: state.users.filter((user) => {
					if (action.payload) {
						return user.name.match(action.payload);
					} else {
						return state.users;
					}
				}),
			};
		},
		toggleProfileModal: (state) => {
			return {
				...state,
				profileModalOpen: !state.profileModalOpen,
			};
		},
		closeProfileModal: (state) => {
			return {
				...state,
				profileModalOpen: false,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getAllUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.errorMessage = '';
			state.users = action.payload;
		});
		builder.addCase(getAllUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = String(action.payload);
			state.users = [];
		});
	},
});

export const { searchUsers, toggleProfileModal, closeProfileModal } = userSlice.actions;
export default userSlice.reducer;
