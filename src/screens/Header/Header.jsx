import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { AppContext } from '../../AppContext';
import { teams, applyTheme } from '../../colors/theme';
import { SlArrowUp } from 'react-icons/sl';
import { SlArrowDown } from 'react-icons/sl';
const Header = () => {
	const { club, gender, setGender, filter, setFilter } = useContext(AppContext);
	useEffect(() => {
		applyTheme(club);
	}, [club]);
	const [clickFilter, setClickFilter] = useState(false);
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

	const handleClickAll = () => {
		setGender('All');
	};
	const handleClickMen = () => {
		setGender('Men');
	};
	const handleClickWomens = () => {
		setGender('Womens');
	};

	const handleClickFilter = () => {
		setClickFilter(!clickFilter);
	};
	return (
		<div className='flex flex-gap-5 categories'>
			<div className='flex flex-gap-5 gender items-center'>
				<p
					className={`header__li fs-sm ${
						gender === 'All' ? 'selecting' : 'not-selecting'
					}`}
					onClick={handleClickAll}
				>
					ALL
				</p>
				<p
					className={`header__li fs-sm ${
						gender === 'Men' ? 'selecting' : 'not-selecting'
					}`}
					onClick={handleClickMen}
				>
					MEN
				</p>
				<p
					className={`header__li fs-sm ${
						gender === 'Womens' ? 'selecting' : 'not-selecting'
					}`}
					onClick={handleClickWomens}
				>
					WOMEN
				</p>
				<div className='flex flex-col'>
					<div className='header__div-filter' onClick={handleClickFilter}>
						<div className='header__div-container1'>
							<div className='icon-filter'>
								<div className='line'></div>
								<div className='line'></div>
								<div className='circle1'></div>
								<div className='circle2'></div>
							</div>
							<span className='header__title title1'>Filter</span>
						</div>
					</div>

					<div
						className={`container-filter ${clickFilter ? 'open' : 'closed'}`}
					>
						<div
							className='filter-op filter-op2'
							onClick={() => setFilter('L')}
						>
							Price: Low - High{' '}
							{filter === 'L' && <span className='header__filter-L'>•</span>}
						</div>
						<div
							className='filter-op filter-op3'
							onClick={() => setFilter('H')}
						>
							Price: High - Low{' '}
							{filter === 'H' && <span className='header__filter-H'>•</span>}
						</div>
						<div className='filter-op filter-op4' onClick={() => setFilter('')}>
							Reset
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
