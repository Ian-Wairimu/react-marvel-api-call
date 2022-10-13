import React, {useState} from 'react';
import {Search} from '../Search/Search';
import {Grid} from '../Grid/Grid';
import {Card} from '../Card/Card';
import './main.css';

const IMAGE_SIZE = 'portrait_fantastic';
export const Main = () => {
	const[heroes, setHeroes] = useState([]);
	let cards;
	if(heroes) {
		cards = heroes.map((hero) => {
			return <Card
				key={hero.id}
				name={hero.name}
				character={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
			/>;
		});
	}
	return (
		<>
			<div className="main--con">
				<h1 className="h1--main">Discover Your Favourite Heroes</h1>
				<Search names={setHeroes}/>
				<Grid>
					{
						cards ? cards : ''
					}
				</Grid>
			</div>
		</>
	);
};