import React from 'react';
import './grid.css';
// eslint-disable-next-line react/prop-types
export const Grid = ({children}) => {
	return (
		<div className="grid--con">
			{children}
		</div>
	);
};