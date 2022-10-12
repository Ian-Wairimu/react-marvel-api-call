import React from 'react';
import './header.css';
import {Button} from '../Button/Button';

export const Header = () => {
	const button = [{
		name: 'Learn More',
		className: 'btn--header'
	}];
	return (
		<>
			<div className="header--con">
				<div className="header--cont">
					<h1 className="h1--header">Welcome to Comic-Con Discover Your Favourite Marvel Character</h1>
					{button.map((v, i) => {
						return <Button name={v.name} className={v.className} key={i} />;
					})}
				</div>
			</div>
		</>
	);
};

