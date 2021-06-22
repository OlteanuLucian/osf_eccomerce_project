import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import Sales from '../components//Sales';
import PopularItems from '../components//PopularItems';
import Banner from '../components//Banner';
import FeaturedProducts from '../components//FeaturedProducts';
import Services from '../components//Services';

export const Home = () => {
	useEffect(() => {
		document.title = 'eCommerce';
	}, []);

	return (
		<div className="App">
			<Sales />
			<PopularItems />
			<Banner />
			<FeaturedProducts />
			<Services />
		</div>
	);
};
