import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

const TableRow = () => {
	return (
		<tr className=" even:bg-white odd:bg-gray-110">
			<td className="w-1/4 px-6 py-2 text-sm md:text-md">Edwin</td>
			<td className="w-1/4 px-6 py-2 text-sm md:text-md">Walela</td>
			<td className="w-1/4 px-6 py-2 text-sm md:text-md">FullStack Developer</td>
			<td className="w-1/12 px-6 py-2 text-sm md:text-md">
				<img src={editIcon} className="w-5 h-5 inline-block mr-4 cursor-pointer" />
				<img src={deleteIcon} className="w-5 h-5 inline-block cursor-not-allowed" />
			</td>
		</tr>
	);
};

export default TableRow;
