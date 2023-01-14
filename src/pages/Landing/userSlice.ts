import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../common/types';

interface userState {
	users: User[];
}

const initialState = {
	users: [],
} as userState;

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
