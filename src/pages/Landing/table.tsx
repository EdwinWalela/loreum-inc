import NotFoundPage from '../NotFound';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import { NavLink } from 'react-router-dom';

const Table = () => {
	return (
		<>
			<table className="md:w-11/12 md:mx-auto mx-5  my-8 mb-16  text-left shadow-md ">
				<TableHeader />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
			</table>
			{/* <NotFoundPage isPage={false} /> */}
		</>
	);
};

export default Table;
