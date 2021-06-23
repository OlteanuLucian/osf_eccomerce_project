import React, { useEffect } from 'react';
import './App.scss';
import './assets/globalStyles/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './components//Header';
import Sales from './components//Sales';
import PopularItems from './components//PopularItems';
import Banner from './components//Banner';
import FeaturedProducts from './components//FeaturedProducts';
import Services from './components//Services';
import Footer from './components//Footer';

library.add(fab);

function App() {
	useEffect(() => {
		document.title = 'OSF Academy_Lucian Olteanu';
	}, []);

	return (
		<div className="App">
			<Header />
			<Sales />
			<PopularItems />
			<Banner />
			<FeaturedProducts />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
