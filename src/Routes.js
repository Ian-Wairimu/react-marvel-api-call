import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Navigation} from './components/Navigation/Navigation';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer/Footer';


export const RoutesComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path="/navigation" element={<Navigation />}/>
				<Route path="/header" element={<Header />}/>
				<Route path="/main" element={<Main />}/>
				<Route path="/footer" element={<Footer/>}/>
			</Routes>
		</Router>
	);
};