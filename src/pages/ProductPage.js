import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import RuffleCardigan from '../components//RuffleCardigan';
import PopularItemsLight from '../components//PopularItemsLight';
import Services from '../components//Services';

export const ProductPage = () => {
	useEffect(() => {
		document.title = 'Ruffle Cardigan';
	}, []);

	return (
		<div className="App">
			<RuffleCardigan />
			<PopularItemsLight />
			<Services />
		</div>
	);
};
