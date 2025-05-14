import React, { useEffect, useState, useContext } from 'react';
import Items from '../Item/Items';
import { AppContext } from '../../AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './Welcome.css';
import './WelcomeCustom.css';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
	const navigate = useNavigate();
	const [featuredItemsUpper, setFeaturedItemsUpper] = useState([]);
	const [currentIndexUpper, setCurrentIndexUpper] = useState(0);
	const [featuredItems, setFeaturedItems] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { club } = useContext(AppContext);

	useEffect(() => {
		axios
			.get(process.env.PUBLIC_URL + '/data/Data.json')
			.then((res) => {
				const data = res.data.legends;
				const filteredItemsUpper = data
					.filter((item) => item.club === club)
					.slice(0, 3);
				setFeaturedItemsUpper(filteredItemsUpper);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, [club]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndexUpper(
				(prevIndexUpper) => (prevIndexUpper + 1) % featuredItemsUpper.length
			);
		}, 7000);
		return () => clearInterval(interval);
	}, [featuredItemsUpper]);

	const handleNextUpper = () => {
		setCurrentIndexUpper(
			(prevIndexUpper) => (prevIndexUpper + 1) % featuredItemsUpper.length
		);
	};

	const handlePrevUpper = () => {
		setCurrentIndexUpper(
			(prevIndexUpper) =>
				(prevIndexUpper - 1 + featuredItemsUpper.length) %
				featuredItemsUpper.length
		);
	};
	useEffect(() => {
		axios
			.get(process.env.PUBLIC_URL + '/data/Data.json')
			.then((res) => {
				const data = res.data.items;
				const filteredItems = data
					.filter((item) => item.club === club)
					.slice(0, 5);
				setFeaturedItems(filteredItems);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, [club]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [featuredItems]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + featuredItems.length) % featuredItems.length
		);
	};

	return (
		<div className='page-container'>
			<div className='content'>
				<h2 className='welcome-title'>CHÀO MỪNG ĐẾN VỚI ADN STORE</h2>
				<div className='slideshow-upper-container'>
					{featuredItemsUpper.length > 0 && (
						<>
							<FontAwesomeIcon
								icon={faChevronLeft}
								className='slideshow-upper-btn prev'
								onClick={handlePrevUpper}
								onMouseDown={(event) => event.preventDefault()}
								onDoubleClick={(event) => event.preventDefault()}
							/>
							<div className='slideshow-upper-item'>
								<img
									src={featuredItemsUpper[currentIndexUpper]?.image}
									alt={featuredItemsUpper[currentIndexUpper]?.name}
									className='legend-image'
								/>
								<h2>
									<a
										href={featuredItemsUpper[currentIndexUpper]?.link}
										className='legends-name'
										target='_blank'
										rel='noopener noreferrer'
									>
										{featuredItemsUpper[currentIndexUpper]?.name}
									</a>
								</h2>
							</div>
							<FontAwesomeIcon
								icon={faChevronRight}
								className='slideshow-upper-btn next'
								onClick={handleNextUpper}
								onMouseDown={(event) => event.preventDefault()}
								onDoubleClick={(event) => event.preventDefault()}
							/>
						</>
					)}
				</div>

				<div className='invite-container'>
					<h2 className='invite-title'>
						KHÁM PHÁ CÁC SẢN PHẨM CỦA CHÚNG TÔI TẠI ĐÂY
					</h2>
					<div className='btn-product-container'>
						<button
							className='button-product'
							onClick={() => navigate('/home')}
						>
							SẢN PHẨM
						</button>
					</div>
				</div>

				<h2 className='mb-3 '>SẢN PHẨM NỔI BẬT</h2>
				<div className='slideshow-wrapper'>
					<div className='slideshow-container'>
						{featuredItems.length > 0 && (
							<>
								<FontAwesomeIcon
									icon={faChevronLeft}
									className='slideshow-btn prev'
									onClick={handlePrev}
									onMouseDown={(event) => event.preventDefault()}
									onDoubleClick={(event) => event.preventDefault()}
								/>
								<div className='slideshow-item'>
									<Items
										id={featuredItems[currentIndex]?.id}
										name={featuredItems[currentIndex]?.name}
										image={featuredItems[currentIndex]?.image1}
										s_image={featuredItems[currentIndex]?.image2}
										price={featuredItems[currentIndex]?.price}
										hideCart={true}
									/>
								</div>
								<FontAwesomeIcon
									icon={faChevronRight}
									className='slideshow-btn next'
									onClick={handleNext}
									onMouseDown={(event) => event.preventDefault()}
									onDoubleClick={(event) => event.preventDefault()}
								/>
							</>
						)}
					</div>
					<div className='slideshow-indicators'>
						{featuredItems.map((_, index) => (
							<span
								key={index}
								className={`indicator ${
									index === currentIndex ? 'active' : ''
								}`}
							></span>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Welcome;
