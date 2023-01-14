import axios from 'axios';
import { User } from '../../common/types';
const BASE_URL = import.meta.env.API_BASE_URL;
const API_KEY = import.meta.env.API_KEY;

const getAllUsers = async (): Promise<User[]> => {
	let users: User[] = [];
	try {
		const response = await axios.get(BASE_URL, { headers: { 'x-apikey': API_KEY } });
		for (const data of response.data) {
			let user: User = {
				id: data._id,
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

export default {
	getAllUsers,
};
