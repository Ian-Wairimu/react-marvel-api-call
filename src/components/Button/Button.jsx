import React from 'react';

// eslint-disable-next-line react/prop-types
export const Button = ({className, onClick, name}) => {
	return (
		<>
			<button className={className} onClick={onClick}>{name}</button>
		</>
	);
};