import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import ShoppingCart from '../components/ShoppingCart/';

export const Cart = () => {
	useEffect(() => {
		document.title = 'Checkout';
	}, []);

	return (
		<div className="App">
			<ShoppingCart />
		</div>
	);
};
