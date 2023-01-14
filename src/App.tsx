import { Routes, Route } from 'react-router-dom';
import './App.css';
import DecisionPage from './pages/Decision';
import LandingPage from './pages/Landing';
import AnalysisPage from './pages/Analysis';
import SettingsPage from './pages/Settings';
import NavBar from './Layout/Navbar';
import Header from './Layout/Header';
import NotFoundPage from './pages/NotFound';
import EditUserPage from './pages/EditUser';

const App = () => {
	return (
		<div className="md:flex h-screen bg-gray-200">
			<NavBar />
			<div className="md:w-4/5 overflow-y-scroll">
				<Header />
				<Routes>
					<Route path="/" element={<DecisionPage />} />
					<Route path="/people" element={<LandingPage />} />
					<Route path="/people/edit/:id" element={<EditUserPage />} />
					{/* <Route path="/analysis" element={<AnalysisPage />} /> */}
					{/* <Route path="/settings" element={<SettingsPage />} /> */}
					<Route path="*" element={<NotFoundPage isPage={true} />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
