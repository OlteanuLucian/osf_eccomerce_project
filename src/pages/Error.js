import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import NotFound from '../components/NotFound/';

export const Error = () => {
	useEffect(() => {
		document.title = '404';
	}, []);

	return (
		<div className="App">
			<NotFound />
		</div>
	);
};
