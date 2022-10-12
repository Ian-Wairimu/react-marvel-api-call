import React from 'react';
import './navigation.css';
import {Button} from '../Button/Button';

export const Navigation = () => {
	const button = [{
		name: 'Get Started',
		className: 'btn--nav'
	}];
	return (
		<>
			<div className="nav--con">
				<form action="">
					<input
						type="search"
						name="comic-search"
						placeholder="Search For Characters"
						className="search--nav"/>
				</form>
				<nav className="navigation">
					<ul className="navigation--items">
						<li className="navigation--list">
							<a href="" className="navigation--links">Home</a>
						</li>
						<li className="navigation--list">
							<a href="" className="navigation--links">Blog</a>
						</li>
						<li className="navigation--list">
							<a href="" className="navigation--links">About Us</a>
						</li>
					</ul>
				</nav>
				{
					button.map((v, i) => {
						return <Button name={v.name} className={v.className} key={i} />;
					})
				}
			</div>
		</>
	);
};