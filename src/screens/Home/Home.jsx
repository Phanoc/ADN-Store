import React, { useContext, useEffect, useState } from 'react';
import Items from '../Item/Items';
import { teams, applyTheme } from '../../colors/theme';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import Header from '../Header/Header';
import FlexWrap from '../../components/UI/FlexWrap';
import Grid from '../../components/UI/Grid';
import './Home.css';

const Home = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const { club, globalSearchTerm, gender, filter } = useContext(AppContext);

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

	useEffect(() => {
		axios
			.get(process.env.PUBLIC_URL + '/data/Data.json')
			.then((res) => setData(res.data.items))
			.catch((err) => console.error(err));
	}, [gender]);

	useEffect(() => {
		let sortedData = [...data];
		if (filter === 'L') {
			sortedData.sort((a, b) => a.price - b.price);
		} else if (filter === 'H') {
			sortedData.sort((a, b) => b.price - a.price);
		}
		const filtered = sortedData.filter(
			(e) =>
				(e.name?.toLowerCase() || '').includes(
					globalSearchTerm?.toLowerCase() || ''
				) &&
				e.club === club &&
				(gender === 'All' || e.gender === gender)
		);

		setFilteredData(filtered);
	}, [data, globalSearchTerm, gender, club, filter]);

	return (
		<div className='product'>
			<div className='flex flex-col'>
				<Header />
				{/* <h2 className='mb-3 home__jersey text-center'>Danh sách áo đấu</h2> */}
				<div className='flex flex-col product-list items-center'>
					<FlexWrap>
						{filteredData.length > 0 ? (
							filteredData.map((e) => (
								<div key={e.id} className='item-card'>
									<Items
										id={e.id}
										name={e.name}
										image={e.image1}
										s_image={e.image2}
										price={e.price}
									/>
								</div>
							))
						) : (
							<p>Không tìm thấy sản phẩm</p>
						)}
					</FlexWrap>
				</div>
			</div>
		</div>
	);
};

export default Home;
