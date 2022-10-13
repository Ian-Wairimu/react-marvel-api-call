import React, {useRef} from 'react';
import './search.css';
import {fetchHeroes} from '../../utils/utils';
import {GoSearch} from 'react-icons/go';

// eslint-disable-next-line react/prop-types
export const Search = ({names}) => {
	const input = useRef('');
	const handleClick = async () => {
		const value = input.current.value;
		try {
			const heroes = await fetchHeroes(value);
			names(heroes);
		}catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div className="search--con">
			<form action="" onSubmit={e => e.preventDefault()}>
				<input
					type="search"
					name="comic-search"
					ref={input}
					placeholder="Search For Characters"
					className="search--nav"/>
				<button onClick={handleClick} className="search--btn">Search</button>
				<span onClick={handleClick} className="search--btn-icon">
					<GoSearch color="#434573" size={30} />
				</span>
			</form>
		</div>
	);
};