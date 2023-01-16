import { User } from '../../common/types';
import NotFoundPage from '../NotFound';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { getAllUsers } from './userSlice';
import Loader from '../../common/loader';
import Modal from './modal';

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
				<Loader message="" />
			</>
		);
	} else {
		return (
			<>
				{state.hasError && <Modal isSuccess={false} message={state.errorMessage} />}
				<table className="md:w-11/12 md:mx-auto  mx-5  my-8 mb-16  text-left shadow-md ">
					<TableHeader />
					<tbody>
						{state.users.map((user: User, i: number) => (
							<TableRow user={user} key={i} />
						))}
					</tbody>
				</table>
				{state.users.length == 0 && <NotFoundPage isPage={false} />}
			</>
		);
	}
};

export default Table;
