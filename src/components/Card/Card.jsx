import React from 'react';
import './card.css';
// eslint-disable-next-line react/prop-types
export const Card = ({character, name}) => {
	return (
		<>
			<div className="card">
				<img src={character} alt="characters" className="card--img"/>
				<h1 className="card--h1">{name}</h1>
			</div>
		</>
	);
};