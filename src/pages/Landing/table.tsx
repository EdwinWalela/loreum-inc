import TableHeader from './tableHeader';
import TableRow from './tableRow';

const Table = () => {
	return (
		<table className="md:w-11/12 md:mx-auto mx-5  my-8  text-left shadow-md">
			<TableHeader />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />

			<TableRow />
		</table>
	);
};

export default Table;
