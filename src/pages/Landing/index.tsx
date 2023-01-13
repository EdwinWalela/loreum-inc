import SearchBar from './searchBar';
import UserTable from './table';

const LandingPage = () => {
	return (
		<div className="bg-gray-200 h-full">
			<SearchBar />
			<UserTable />
		</div>
	);
};

export default LandingPage;
