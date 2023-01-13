import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

const TableRow = () => {
	return (
		<tr className="bg-white">
			<td className="w-1/4 px-6 py-2">Edwin</td>
			<td className="w-1/4 px-6 py-2">Walela</td>
			<td className="w-1/4 px-6 py-2">FullStack Developer</td>
			<td className="w-1/4 px-6 py-2">
				<img src={editIcon} className="w-5 h-5 inline-block mr-2 cursor-pointer" />
				<img src={deleteIcon} className="w-5 h-5 inline-block cursor-not-allowed" />
			</td>
		</tr>
	);
};

export default TableRow;
