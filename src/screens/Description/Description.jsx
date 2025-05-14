import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import './Description.css';
import '../../Utilities.css';
import DescriptionOption from './Options/DescriptionOption';

const Description = () => {
	const { id } = useParams();
	const [renderedProduct, setRenderedProduct] = useState(null);

	useEffect(() => {
		axios
			.get('/data/Data.json')
			.then((event) => {
				const product = event.data.items.find((item) => item.id == id);
				setRenderedProduct(product);
			})
			.catch((error) => {
				console.error('Error: ', error);
			});
	}, [id]);

	if (!renderedProduct) {
		return <p>Something went wrong</p>;
	}

	return (
		<div className='container description'>
			<div className='grid grid-2-col '>
				<div className='img-holder'>
					<img
						src={renderedProduct.image1}
						alt={renderedProduct.name}
						className='desc-img'
					/>
				</div>
				<div className='p-3' style={{ width: '100%' }}>
					<h3 className='lead mb-1 word-wrap'>{renderedProduct.name}</h3>
					<p className='fs-sm mb-3 word-wrap'>{renderedProduct.description}</p>
					<p className='lead mb-3 word-wrap color-primary'>
						Your Price: ${renderedProduct.price}.00
					</p>
					<DescriptionOption
						key={renderedProduct.id}
						id={renderedProduct.id}
						name={renderedProduct.name}
						description={renderedProduct.description}
						image={renderedProduct.image1}
						price={renderedProduct.price}
					/>
					<Link to='/home' className='flex justify-center'>
						<p className='linked-text'>CONTINUE SHOPPING</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Description;
