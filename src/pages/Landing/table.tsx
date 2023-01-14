import { User } from '../../common/types';
import NotFoundPage from '../NotFound';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { getAllUsers } from './userSlice';
import Loader from '../../common/loader';

const Table = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.users);

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	if (state.isLoading) {
		return (
			<>
				<table className="md:w-11/12 md:mx-auto mx-5  my-8 mb-16  text-left shadow-md ">
					<TableHeader />
				</table>
				<Loader />
			</>
		);
	} else {
		return (
			<>
				<table className="md:w-11/12 md:mx-auto mx-5  my-8 mb-16  text-left shadow-md ">
					<TableHeader />
					{state.users.map((user: User) => (
						<TableRow user={user} />
					))}
				</table>
				{state.users.length == 0 && <NotFoundPage isPage={false} />}
			</>
		);
	}
};

export default Table;
