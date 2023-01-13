import './App.css';
import LandingPage from './pages/Landing';
import NavBar from './Layout/Navbar';

const App = () => {
	return (
		<div className="md:flex h-screen">
			<NavBar />
			<LandingPage />
		</div>
	);
};

export default App;
