import './Items.css';
import { teams, applyTheme } from '../../colors/theme';
import { AppContext } from '../../AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react';

const Items = ({ id, name, description, image, price, s_image, hideCart }) => {
	const { club, setCartCount } = useContext(AppContext);
	const location = useLocation();
	const fromWelcome = location.pathname === '/' ? true : false;

	useEffect(() => {
		applyTheme(club);
	}, [club]);

	useEffect(() => {
		if (teams[club]) {
			document.documentElement.style.setProperty(
				'--color_title',
				teams[club].color_title
			);
			document.documentElement.style.setProperty(
				'--navbar-bg',
				`url(${teams[club].background})`
			);
			document.documentElement.style.setProperty(
				'--font_logo',
				teams[club].font_logo
			);
			document.documentElement.style.setProperty(
				'--font_text',
				teams[club].font_text
			);
			document.documentElement.style.setProperty(
				'--main_color',
				teams[club].main_color
			);
			document.documentElement.style.setProperty(
				'--second_color',
				teams[club].second_color
			);
		}
	}, [club]);
	return (
		<Link to={`/description/${id}`} state={{ fromWelcome }}>
			<div className='card'>
				<img src={image} alt='' className='card-img img1' />
				<img src={s_image} alt='' className='card-img img2' />
				<div className='card-body'>
					<p className='lead mb-1 '>${price}.00</p>
					<h3 className='fs-sm'>{name}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Items;
