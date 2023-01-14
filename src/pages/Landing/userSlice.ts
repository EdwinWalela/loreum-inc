import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';
import api from '../../api/users/index';

interface userState {
	users: User[];
	isLoading: Boolean;
	hasError: Boolean;
	errorMessage: string;
}

const initialState = {
	users: [],
	isLoading: false,
	hasError: false,
	errorMessage: '',
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
	reducers: {},
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

export default userSlice.reducer;
