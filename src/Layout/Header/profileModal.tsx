import { NavLink } from 'react-router-dom';
import closeIcon from '../../assets/close.svg';
import { useAppDispatch } from '../../store/hooks';
import { closeProfileModal } from '../../pages/Landing/userSlice';

const ProfileModal = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="absolute text-center right-6 top-20 px-10 py-5 w-1/4 z-10 h-80 bg-slate-700 rounded-md shadow-lg text-white">
			<img
				src={closeIcon}
				className="absolute w-6 h-6 left-64 cursor-pointer"
				onClick={() => dispatch(closeProfileModal())}
			/>
			<img src="https://picsum.photos/200" className="mx-auto rounded-full w-20 h-20" />
			<p className="text-sm font-medium mt-4">Edwin Walela</p>
			<p className="text-xs mt-1">edwinwalela@gmail.com</p>
			<NavLink
				to="#"
				className="block border border-gray-400 hover:bg-white hover:text-slate-700 transition-all ease-in-out  text-xs font-medium py-1 px-2 rounded-full w-4/6 mx-auto my-4"
			>
				Manage your profile
			</NavLink>
			<NavLink
				to="#"
				className="block border border-gray-400 hover:bg-white hover:text-slate-700 transition-all ease-in-out font-medium py-2 px-2 rounded-md w-4/6 mx-auto mt-6"
			>
				Sign out
			</NavLink>
		</div>
	);
};

export default ProfileModal;
