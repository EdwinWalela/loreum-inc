import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';
import api from '../../api/users/index';
interface EditUserState {
	user: User;
}

const initialState = {
	user: {},
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
		builder.addCase(getUserById.pending, (state, action) => {});
		builder.addCase(getUserById.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addCase(getUserById.rejected, (state, action) => {});
	},
});

export default editUserSlice.reducer;
