import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';

interface EditUserState {
	user: User;
}

const initialState = {
	user: {},
} as EditUserState;

export const editUserSlice = createSlice({
	name: 'editUser',
	initialState,
	reducers: {},
});

export default editUserSlice.reducer;
