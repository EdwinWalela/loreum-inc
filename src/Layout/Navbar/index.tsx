import ItemList from './itemList';

const NavBar = () => {
	return (
		<div className="md:w-1/5 min-w-max pt-5 bg-slate-700 text-slate-200">
			<h1 className="font-bold text-center md:text-xl mb-3 md:mb-0">Loreum Inc</h1>
			<ItemList />
		</div>
	);
};

export default NavBar;
