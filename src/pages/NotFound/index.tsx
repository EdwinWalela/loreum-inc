import { NavLink } from 'react-router-dom';
import notfoundIcon from '../../assets/not-found.svg';

const NotFoundPage = (props: { isPage: boolean }) => {
	return (
		<div className="">
			<img src={notfoundIcon} className="w-1/6 h-1/6 m-auto mt-20" />
			{props.isPage ? (
				<h2 className="text-center mt-10">Page Not Found</h2>
			) : (
				<h2 className="text-center mt-10">No data to display</h2>
			)}
			<NavLink to="/people">
				{props.isPage && (
					<button className="bg-blue-500 text-white px-3 py-1 rounded-md mx-auto my-2 block">
						Return Home
					</button>
				)}
			</NavLink>
		</div>
	);
};

export default NotFoundPage;
