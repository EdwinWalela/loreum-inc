import { Routes, Route } from 'react-router-dom';
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
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
