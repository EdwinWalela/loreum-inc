import TableHeader from './tableHeader';
import TableRow from './tableRow';

const Table = () => {
	return (
		<table className="w-11/12 mx-auto my-8  text-left shadow-md">
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
