import { useEffect } from 'react';
import SearchBar from './searchBar';
import UserTable from './table';
import { useAppDispatch } from '../../store/hooks';
import { closeProfileModal } from './userSlice';

const LandingPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(closeProfileModal());
	}, []);

	return (
		<div className="bg-gray-200">
			<SearchBar />
			<UserTable />
		</div>
	);
};

export default LandingPage;
