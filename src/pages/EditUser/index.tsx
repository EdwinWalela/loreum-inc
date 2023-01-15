import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getUserById, updateUser } from './editUserslice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Loader from '../../common/loader';
import backIcon from '../../assets/back.svg';
import Modal from './modal';

const EditUserPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.editUser);
	const [updated, setUpdated] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [occupation, setOccupation] = useState('');
	const [bio, setBio] = useState('');

	useEffect(() => {
		if (id) {
			dispatch(getUserById(id));
		}
	}, []);

	useEffect(() => {
		loadUser();
	}, [state.user]);

	function loadUser() {
		setName(state.user.name);
		setEmail(state.user.email);
		setOccupation(state.user.occupation);
		setBio(state.user.bio);
	}

	function handleNameChange(e: React.FormEvent<HTMLInputElement>) {
		if (!updated) {
			setUpdated(true);
		}
		setName(e.currentTarget.value);
	}
	function handleEmailChange(e: React.FormEvent<HTMLInputElement>) {
		if (!updated) {
			setUpdated(true);
		}
		setEmail(e.currentTarget.value);
	}
	function handleOccupationChange(e: React.FormEvent<HTMLInputElement>) {
		if (!updated) {
			setUpdated(true);
		}
		setOccupation(e.currentTarget.value);
	}
	function handleBioChange(e: React.FormEvent<HTMLTextAreaElement>) {
		if (!updated) {
			setUpdated(true);
		}
		setBio(e.currentTarget.value);
	}
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setUpdated(false);
		dispatch(
			updateUser({
				id: String(id),
				name,
				email,
				occupation,
				bio,
			})
		);
	}

	return (
		<div className="bg-gray-200 py-8 ">
			<div className="flex flex-col items-center px-6 mx-auto lg:py-0">
				<div className="w-full bg-white rounded-lg  shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						{state.isLoading ? (
							<Loader message="Loading" />
						) : (
							<>
								<NavLink
									type="submit"
									to="/"
									className=" bg-blue-500 transition-all ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm pl-2 pr-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									<img src={backIcon} className="w-4 h-4 inline mr-2" />
									Back
								</NavLink>
								{state.hasError && <Modal isSuccess={false} />}
								{state.updateSuccess && <Modal isSuccess={true} />}
								<form
									className="space-y-4 md:space-y-6 transition-all ease-linear"
									action="#"
									onSubmit={handleSubmit}
								>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Full name
										</label>
										<input
											type="text"
											value={name}
											onChange={handleNameChange}
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="John Doe"
											required={true}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Email Address
										</label>
										<input
											type="email"
											value={email}
											onChange={handleEmailChange}
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="name@company.com"
											required={true}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Occupation
										</label>
										<input
											type="text"
											value={occupation}
											onChange={handleOccupationChange}
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Developer"
											required={true}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Bio
										</label>
										<textarea
											value={bio}
											rows={4}
											onChange={handleBioChange}
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="User's biography"
											required={true}
										/>
									</div>
									{updated && (
										<button
											type="submit"
											className="w-full bg-blue-500 transition-all ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
										>
											Save Changes
										</button>
									)}
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUserPage;
