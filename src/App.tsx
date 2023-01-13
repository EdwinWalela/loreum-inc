import './App.css';
import LandingPage from './pages/Landing';
import NavBar from './Layout/Navbar';
import Header from './Layout/Header';

const App = () => {
	return (
		<div className="md:flex h-screen">
			<NavBar />
			<div className="md:w-4/5">
				<Header />
				<LandingPage />
			</div>
		</div>
	);
};

export default App;
