import axios from 'axios';
import { User } from '../../common/types';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const getAllUsers = async (): Promise<User[]> => {
	let users: User[] = [];
	try {
		const response = await axios.get(BASE_URL, { headers: { 'x-apikey': API_KEY } });
		for (const data of response.data.users) {
			let user: User = {
				id: data.id,
				name: data.name,
				email: data.email,
				occupation: data.occupation,
				bio: data.bio,
			};
			users.push(user);
		}
	} catch (error: any) {
		throw new Error(`Failed to fetch users: ${error.message}`);
	}
	return users;
};

const getUserById = async (id: string): Promise<User> => {
	try {
		const response = await axios.get(`${BASE_URL}/${id}`, { headers: { 'x-apikey': API_KEY } });
		let user: User = {
			id: response.data.user.id,
			name: response.data.user.name,
			email: response.data.user.email,
			occupation: response.data.user.occupation,
			bio: response.data.user.bio,
		};
		console.log(user);
		return user;
	} catch (error: any) {
		throw new Error(`Failed to fetch user: ${error.message}`);
	}
};

const updateUser = async (user: User) => {
	try {
		let body = {
			name: user.name,
			email: user.email,
			occupation: user.occupation,
			bio: user.bio,
		};
		const response = await axios.patch(`${BASE_URL}/${user.id}`, body, {
			headers: { 'x-apikey': API_KEY },
		});
		return response.data;
	} catch (error: any) {
		throw new Error(`Failed to update user: ${error.message}`);
	}
};

export default {
	getAllUsers,
	getUserById,
	updateUser,
};
