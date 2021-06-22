import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import LandingServices from '../components/LandingServices/index.js';
import FeaturedProducts from '../components//FeaturedProducts';

export const CategoryServices = () => {
	useEffect(() => {
		document.title = 'Category Services';
	}, []);

	return (
		<div className="App">
			<LandingServices />
			<FeaturedProducts />
		</div>
	);
};
