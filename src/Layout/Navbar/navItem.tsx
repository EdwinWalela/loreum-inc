import { NavLink } from 'react-router-dom';
import profileIcon from '../../assets/nav/profile.svg';
import graphIcon from '../../assets/nav/graph.svg';
import settingsIcon from '../../assets/nav/settings.svg';

const NavItem = (props: { type: string }) => {
	let icon: string;
	let title: string;
	let link: string;
	switch (props.type) {
		case 'people':
			icon = profileIcon;
			title = 'People Management';
			link = '/';
			break;
		case 'analysis':
			icon = graphIcon;
			title = 'Analysis';
			link = '/analysis';
			break;
		case 'settings':
			icon = settingsIcon;
			title = 'Settings';
			link = '/settings';
			break;
		default:
			icon = profileIcon;
			title = '';
			link = '';
	}

	return (
		<NavLink to={link}>
			<li className="md:px-8 py-3 inline-block md:block md:mx-0 mx-10 md:mb-4 cursor-pointer md:hover:border-l-4 transition-all ease-in-out">
				<div className="flex items-center">
					<img src={icon} className="w-6 mr-2" />
					<p className="text-sm hidden md:block">{title}</p>
				</div>
			</li>
		</NavLink>
	);
};

export default NavItem;
