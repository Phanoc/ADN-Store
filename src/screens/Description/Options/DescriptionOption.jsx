import React, { useContext, useState } from 'react';
import SizeSelector from './SizeSelector';
import './DescriptionOption.css';
import { AppContext } from '../../../AppContext';
import { Link } from 'react-router-dom';

const DescriptionOption = ({ id, name, description, image, price }) => {
	const { addToCart } = useContext(AppContext);
	const [selectedSize, setSelectedSize] = useState(null);

	const addToCartHandler = () => {
		const item = {
			id,
			name,
			description,
			image,
			price,
			selectedSize,
		};
		addToCart(item);
	};

	const sizeSelectedHandler = (size) => {
		setSelectedSize(size);
	};

	return (
		<div className='desc-option p-3 mb-3'>
			<SizeSelector onSelectedSize={sizeSelectedHandler} />
			<Link to='/cart'>
				<button
					className={`btn btn-primary lead ${!selectedSize && 'deactivate'}`}
					style={{ width: '100%' }}
					onClick={(event) => {
						if (!selectedSize) {
							event.preventDefault();
							alert('Please choose your size');
							return;
						}
						addToCartHandler();
					}}
					title={!selectedSize && 'Please choose your size'}
				>
					Add to cart
				</button>
			</Link>
		</div>
	);
};

export default DescriptionOption;
