import NavItem from './navItem';

const ItemList = () => {
	return (
		<ul className="md:mt-4 text-center">
			<NavItem type="people" />
			<NavItem type="analysis" />
			<NavItem type="settings" />
		</ul>
	);
};

export default ItemList;
