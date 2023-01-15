import { User } from '../../common/types';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import mailIcon from '../../assets/mail.svg';
import { Link } from 'react-router-dom';

const TableRow = (props: { user: User }) => {
	return (
		<tr className=" even:bg-white odd:bg-gray-110">
			<td className="w-1/4 px-6 py-2 text-sm md:text-md">{props.user.name}</td>
			<td className="w-1/4 px-6 py-2 text-sm md:text-md">{props.user.email}</td>
			<td className="w-1/4 px-6 py-2 text-sm md:text-md">{props.user.occupation}</td>
			<td className="w-1/11 px-6 py-2 text-sm max-w-xs md:text-md">
				<a href={`mailto:${props.user.email}`}>
					<img src={mailIcon} className="w-5 h-4 inline-block mr-4 cursor-pointer" />
				</a>
				<Link to={`/people/edit/${props.user.id}`}>
					<img src={editIcon} className="w-5 h-5 inline-block mr-4 cursor-pointer" />
				</Link>
				<img src={deleteIcon} className="w-5 h-5 inline-block cursor-not-allowed" />
			</td>
		</tr>
	);
};

export default TableRow;
