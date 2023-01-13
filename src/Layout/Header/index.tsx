import { useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation().pathname.split('/');
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
		<div className="md:flow-root shadow-md py-3 px-8">
			<h1 className="md:float-left font-medium text-lg text-center md:text-left">{title}</h1>
			<div className="md:float-right md:flex items-center hidden md:block">
				<img src="https://picsum.photos/200" className="w-8 h-8 rounded-full mr-4" />
				<div className="">
					<p className="text-sm text-blue-700">John Doe</p>
					<p className="text-xs">Admin</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
