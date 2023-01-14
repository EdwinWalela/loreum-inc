import { User } from '../../common/types';
import NotFoundPage from '../NotFound';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

const Table = () => {
	let user: User = {
		id: '1',
		name: 'edwin walela',
		occupation: 'fullstack developer',
		email: 'edwinwalela@gmail.com',
		bio: 'a',
	};
	return (
		<>
			<table className="md:w-11/12 md:mx-auto mx-5  my-8 mb-16  text-left shadow-md ">
				<TableHeader />
				<TableRow user={user} />
			</table>
			{/* <NotFoundPage isPage={false} /> */}
		</>
	);
};

export default Table;
