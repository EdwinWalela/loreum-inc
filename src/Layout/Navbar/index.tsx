import ItemList from './itemList';

const NavBar = () => {
	return (
		<div className="md:w-1/5 min-w-max md:h-full pt-5 bg-slate-700 text-slate-200">
			<h1 className="font-bold text-center md:text-xl mb-3 md:mb-0">Loreum Inc</h1>
			<ItemList />
			<p className="absolute bottom-8 text-sm text-center left-10 hidden md:block">
				Made by{' '}
				<a href="https://edwinwalela.com" className="underline" target="_blank">
					Edwin Walela
				</a>{' '}
			</p>
		</div>
	);
};

export default NavBar;
