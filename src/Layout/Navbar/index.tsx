import ItemList from './itemList';

const NavBar = () => {
	return (
		<div className="md:w-1/5 pt-5 bg-slate-700 text-slate-200">
			<h1 className="font-bold text-center text-xl">Loreum Inc</h1>
			<ItemList />
		</div>
	);
};

export default NavBar;
