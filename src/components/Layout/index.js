import React from 'react';
import '../../App.scss';
import '../../assets/globalStyles/style.scss';
import Header from '../Header';
import Footer from '../Footer';
import IconsFooter from '../IconsFooter';
import WishContextProvider from '../Contexts/WishContext';
import CartContextProvider from '../Contexts/CartContext';
import Cookie from '../Cookie';

export const Layout = ({ children }) => {
	return (
		<div className="App">
			<CartContextProvider>
				<WishContextProvider>
					<Header />
					{children}
					<Footer />
					<IconsFooter />
					<Cookie />
				</WishContextProvider>
			</CartContextProvider>
		</div>
	);
};
