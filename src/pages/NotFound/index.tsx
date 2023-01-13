import { NavLink } from 'react-router-dom';
import notfoundIcon from '../../assets/not-found.svg';

const NotFoundPage = () => {
	return (
		<div className="">
			<img src={notfoundIcon} className="w-1/6 h-1/6 m-auto mt-20" />
			<h2 className="text-center mt-10">Page Not Found</h2>
			<NavLink to="/people">
				<button className="bg-blue-500 text-white px-3 py-1 rounded-md mx-auto my-2 block">
					Return Home
				</button>
			</NavLink>
		</div>
	);
};

export default NotFoundPage;
