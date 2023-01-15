import { useLocation } from 'react-router-dom';
import ProfileModal from './profileModal';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleProfileModal } from '../../pages/Landing/userSlice';

const Header = () => {
	const location = useLocation().pathname.split('/');
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.users);
	let title = '';
	switch (location[1]) {
		case 'people':
			title = 'People Management';
			break;
		case 'analysis':
			title = 'Analysis';
			break;
		case 'settings':
			title = 'Settings';
			break;

		default:
			title = 'Not Found';
			break;
	}

	return (
		<div className=" md:flow-root shadow-md py-3 px-8 bg-white">
			<h1 className="md:float-left font-medium text-lg text-center md:text-left">{title}</h1>
			<div className="md:float-right md:flex items-center hidden md:block">
				<img
					src="https://picsum.photos/200"
					onClick={() => dispatch(toggleProfileModal())}
					className="w-8 h-8 rounded-full mr-4 cursor-pointer"
				/>
				<div className="">
					<p className="text-sm text-blue-700">Edwin Walela</p>
					<p className="text-xs">Admin</p>
				</div>
				{state.profileModalOpen && <ProfileModal />}
			</div>
		</div>
	);
};

export default Header;
