import React, { useState, createContext } from 'react';

export const WishContext = createContext();

const WishContextProvider = (props) => {
	const [ wishQuantity, setWishQuantity ] = useState(0);

	const addWish = () => {
		setWishQuantity(wishQuantity + 1);
	};

	return <WishContext.Provider value={{ wishQuantity, addWish }}>{props.children}</WishContext.Provider>;
};

export default WishContextProvider;
