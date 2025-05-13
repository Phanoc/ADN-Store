import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import './Description.css';
import '../../Utilities.css';

const Description = () => {
	const { id } = useParams();
	const [renderedProduct, setRenderedProduct] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		axios
			.get('/data/Data.json')
			.then((event) => {
				const product = event.data.find((item) => item.id == id);
				setRenderedProduct(product);
			})
			.catch((error) => {
				console.error('Error: ', error);
			});
	}, [id]);

	if (!renderedProduct) {
		return <p>Something went wrong</p>;
	}

	const fromWelcome = location.state?.fromWelcome ?? false; // Default to false if undefined

	const handleBack = () => {
		if (fromWelcome) {
			navigate('/'); // Navigate to Welcome screen
		} else {
			navigate('/home'); // Navigate to Product screen
		}
	};

	return (
		<div className='container'>
			<div className='flex items-start flex-gap-5'>
				<div className='img-holder'>
					<img
						src={renderedProduct.image1}
						alt={renderedProduct.name}
						className='desc-img'
					/>
				</div>
				<div>
					<h3 className='fs-md mb-3 word-wrap'>
						{renderedProduct.name}
					</h3>
					<p className='lead mb-3 word-wrap'>
						{renderedProduct.description}
					</p>
					<button onClick={handleBack} className='btn btn-primary'>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Description;
