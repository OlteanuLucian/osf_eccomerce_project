import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { CategoryServices } from './pages/CategoryServices';
import { Layout } from './components/Layout';
import { ProductPage } from './pages/ProductPage';
import { Cart } from './pages/Cart';
import { Release } from './pages/Release';

const Router = () => {
	return (
		<Switch>
			<Layout>
				<Route component={Home} path="/" exact />
				<Route component={Error} path="/error" exact />
				<Route component={CategoryServices} path="/categories" exact />
				<Route component={ProductPage} path="/cardigan" exact />
				<Route component={Cart} path="/checkout" exact />
				<Route component={Release} path ="/release" exact />
			</Layout>
		</Switch>
	);
};

export default Router;
