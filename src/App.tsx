import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Landing';
import AnalysisPage from './pages/Analysis';
import SettingsPage from './pages/Settings';
import NavBar from './Layout/Navbar';
import Header from './Layout/Header';
import NotFoundPage from './pages/NotFound';
import EditUserPage from './pages/EditUser';

const App = () => {
	return (
		<div className="md:flex h-screen">
			<NavBar />
			<div className="md:w-4/5">
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/user/edit/:id" element={<EditUserPage />} />
					{/* <Route path="/analysis" element={<AnalysisPage />} /> */}
					{/* <Route path="/settings" element={<SettingsPage />} /> */}
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
