import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';
import api from '../../api/users/index';

interface EditUserState {
	user: User;
	isLoading: boolean;
	updateSuccess: boolean;
	hasError: boolean;
	errorMessage: string;
}

const initialState = {
	user: {},
	isLoading: false,
	hasError: false,
	errorMessage: '',
	updateSuccess: false,
} as EditUserState;

export const getUserById = createAsyncThunk('users/id', async (id: string, { rejectWithValue }) => {
	try {
		return api.getUserById(id);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

export const updateUser = createAsyncThunk(
	'users/update',
	async (user: User, { rejectWithValue }) => {
		try {
			return api.updateUser(user);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const editUserSlice = createSlice({
	name: 'editUser',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserById.pending, (state, action) => {
			state.updateSuccess = false;
			state.isLoading = true;
			state.errorMessage = '';
			state.hasError = false;
			state.user = {
				name: '',
				id: '',
				bio: '',
				email: '',
				occupation: '',
			};
		});
		builder.addCase(getUserById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.errorMessage = '';
			state.hasError = false;
			state.user = action.payload;
		});
		builder.addCase(getUserById.rejected, (state, action) => {
			state.isLoading = false;
			state.errorMessage = String(action.payload);
			state.hasError = true;
		});
		builder.addCase(updateUser.pending, (state, action) => {
			state.isLoading = true;
			state.errorMessage = '';
			state.hasError = false;
			state.updateSuccess = false;
		});
		builder.addCase(updateUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.errorMessage = '';
			state.hasError = false;
			state.updateSuccess = true;
			state.user = action.payload;
		});
		builder.addCase(updateUser.rejected, (state, action) => {
			state.isLoading = false;
			state.errorMessage = String(action.payload);
			state.hasError = true;
			state.updateSuccess = false;
		});
	},
});

export default editUserSlice.reducer;
