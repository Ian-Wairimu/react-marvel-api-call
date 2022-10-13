import React from 'react';
import './footer.css';
import {Abstract} from './FooterItems/Abstract';
import {Resources} from './FooterItems/Resources';
import {Community} from './FooterItems/Community';
import {Company} from './FooterItems/Company';
import {CopyRight} from './FooterItems/CopyRight';
import {Button} from '../Button/Button.jsx';

export const Footer = () => {
	return (
		<>
			<div className="footer--cont">
				<Abstract />
				<Resources />
				<Community />
				<Company />
				<CopyRight />
				<Button name="Help ?" className="ft--btn" />
			</div>
		</>
	);
};