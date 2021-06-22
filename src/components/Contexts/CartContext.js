import React, { useState, createContext, useEffect } from 'react';
import myJson from '../cardInformation.json';

const itemsJson = [ ...myJson ];

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [ itemsQuantity, setItemsQuantity ] = useState(0);
	const [ cartTotal, setCartTotal ] = useState(0);
	const [ items, setItems ] = useState([]);

	useEffect(
		() => {
			total();
		},
		[ items ]
	);

	const addItem = () => {
		setItemsQuantity(itemsQuantity + 1);
	};

	const addItemQuantity = (count) => {
		setItemsQuantity(itemsQuantity + count);
	};

	const addItemCart = (id) => {
		const check = items.every((items) => {
			return items.id !== id;
		});
		if (check) {
			const data = itemsJson.filter((itemsJson) => {
				return itemsJson.id === id;
			});
			setItems([ ...items, ...data ]);
		} else {
			alert('The product has been added to cart.');
		}
	};

	const delItem = (id) => {
		setItems(items.filter((items) => items.id !== id));
	};

	const increase = (id) => {
		items.forEach((items) => {
			if (items.id === id) {
				items.count += 1;
			}
		});
		total();
	};

	const decrease = (id) => {
		items.forEach((items) => {
			if (items.id === id) {
				items.count === 1 ? (items.count = 1) : (items.count -= 1);
			}
		});
		total();
	};

	const total = () => {
		let totalVal = 0;
		for (let i = 0; i < items.length; i++) {
			totalVal += items[i].price * items[i].count;
		}
		let roundedVal = totalVal.toFixed(2);
		setCartTotal(roundedVal);
	};

	return (
		<CartContext.Provider
			value={{
				itemsQuantity,
				cartTotal,
				items,
				addItem,
				addItemQuantity,
				addItemCart,
				delItem,
				decrease,
				increase,
				cartTotal
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
