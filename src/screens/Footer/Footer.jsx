import React, { useContext } from 'react';
import './Footer.css';
import { AppContext } from '../../AppContext';
import { teams } from '../../colors/theme';

const Footer = () => {
	const { club } = useContext(AppContext);

	return (
		<footer
			className='footer'
			style={{ backgroundImage: `url(${teams[club]?.background})` }}
		>
			<div className='footer-content'>
				<p>&copy; 2025 ADN Store. All rights reserved.</p>
				<p>
					Contact us:{' '}
					<a className='link' href=''>
						info@adnstore.com
					</a>
				</p>
				<ul className='footer-links'>
					<li>
						<a href=''>About Us</a>
					</li>
					<li>
						<a href=''>Privacy Policy</a>
					</li>
					<li>
						<a href=''>Terms of Service</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
