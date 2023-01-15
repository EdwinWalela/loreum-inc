import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';
import api from '../../api/users/index';
interface EditUserState {
	user: User;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
}

const initialState = {
	user: {},
	isLoading: false,
	hasError: false,
	errorMessage: '',
} as EditUserState;

export const getUserById = createAsyncThunk('users/id', async (id: string, { rejectWithValue }) => {
	try {
		return api.getUserById(id);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

export const editUserSlice = createSlice({
	name: 'editUser',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserById.pending, (state, action) => {
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
	},
});

export default editUserSlice.reducer;
