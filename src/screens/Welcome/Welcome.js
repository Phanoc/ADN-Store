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

const Welcome = () => {
	const [featuredItems, setFeaturedItems] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { club } = useContext(AppContext);

	useEffect(() => {
		// Fetch featured items based on the current club
		fetch(process.env.PUBLIC_URL + '/data/Data.json')
			.then((res) => res.json())
			.then((data) => {
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

	useEffect(() => {
		const handleImageDoubleClick = (event) => {
			if (event.target.tagName === 'IMG') {
				event.preventDefault();
			}
		};

		document.addEventListener('dblclick', handleImageDoubleClick);

		return () => {
			document.removeEventListener('dblclick', handleImageDoubleClick);
		};
	}, []);

	return (
		<div>
			<h2 className='mb-3'>Danh sách nổi bật</h2>
			<div className='slideshow-wrapper'>
				<div className='slideshow-container'>
					{featuredItems.length > 0 && (
						<>
							<FontAwesomeIcon
								icon={faChevronLeft}
								className='slideshow-btn prev'
								onClick={handlePrev}
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
							/>
						</>
					)}
				</div>
				<div className='slideshow-indicators'>
					{featuredItems.map((_, index) => (
						<span
							key={index}
							className={`indicator ${index === currentIndex ? 'active' : ''}`}
						></span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Welcome;
