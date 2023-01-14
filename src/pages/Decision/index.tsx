import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DecisionPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		//TODO: Check if user is authenticated. If not navigate to login else to dashboard
		navigate('/people');
	}, []);

	return <></>;
};

export default DecisionPage;
