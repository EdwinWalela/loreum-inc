import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/Landing/userSlice';
import editUserReducer from '../pages/EditUser/editUserslice';

export const store = configureStore({
	reducer: {
		users: userReducer,
		editUser: editUserReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
