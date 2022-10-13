import React, {useState} from 'react';
import {Button} from '../Button/Button';
import {ImCross} from 'react-icons/im';
import {FaBars} from 'react-icons/fa';
import './navigation.css';


export const Navigation = () => {
	const[mobile, setMobile] = useState(false);
	const button = [{
		name: 'Get Started',
		className: 'btn--nav'
	}];
	return (
		<>
			<div className="nav--con">
				<nav className={mobile? 'navigation--mobile' : 'navigation'} onClick={() => {setMobile(false);}}>
					<ul className="navigation--items">
						<li className="navigation--list">
							<a href="/header" className="navigation--links">Home</a>
						</li>
						<li className="navigation--list">
							<a href="" className="navigation--links">Blog</a>
						</li>
						<li className="navigation--list">
							<a href="/footer" className="navigation--links">About Us</a>
						</li>
					</ul>
				</nav>
				{
					button.map((v, i) => {
						return <Button name={v.name} className={v.className} key={i} />;
					})
				}
				<span className="open-btn" onClick={() => setMobile(!mobile)}>
					{mobile? <ImCross color="#434573" size={30}/> : <FaBars color="#434573" size={30} />}
				</span>
			</div>
		</>
	);
};