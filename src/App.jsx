import React, {useEffect, useState} from 'react';
import {PacmanLoader} from 'react-spinners';
import './App.css';
import {Navigation} from './components/Navigation/Navigation';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';

export const App = () => {
	const[loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);
	return (
		<>
			{
				loading ? <div className="loader">
					<PacmanLoader color="#000000" />
				</div> : (
					<div>
						<Navigation />
						<Header />
						<Footer />
					</div>
				)
			}
		</>
	);
};