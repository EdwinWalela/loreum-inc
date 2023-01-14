import React, { useEffect, useState } from 'react';
import searchIcon from '../../assets/search.svg';
import { useAppDispatch } from '../../store/hooks';
import { searchUsers, getAllUsers } from './userSlice';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
	const [query, setQuery] = useState('');
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams({ q: '' });

	function handleQueryChange(e: React.FormEvent<HTMLInputElement>) {
		setQuery(e.currentTarget.value);
	}

	useEffect(() => {
		setSearchParams({ q: query });
		dispatch(searchUsers(query));
		if (!query) {
			dispatch(getAllUsers());
		}
	}, [query]);

	return (
		<div className="md:flex justify-end md:pr-10 p-6 md:p-0">
			<div className="relative mt-1 rounded-md shadow-sm clear">
				<div className="pointer-events-none absolute inset-y-0 left-0 md:top-4 md:bottom-0 bottom-14 flex items-center pl-3">
					<img src={searchIcon} className="w-4 h-4" />
				</div>
				<input
					type="text"
					value={query}
					onChange={handleQueryChange}
					className=" rounded-md border-gray-300 md:w-auto w-full  pl-9 py-2 sm:text-sm tracking-wider mr-3"
					placeholder="Search for people"
				/>
				<button className="bg-blue-500 text-white py-2 sm:text-sm w-full md:w-auto px-4 mt-4 rounded-md shadow-md cursor-not-allowed">
					Add New User
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
