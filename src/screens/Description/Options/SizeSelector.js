import React, { useState } from 'react';
import './SizeSelector.css';

const SizeSelector = () => {
	const [selectedSize, setSelectedSize] = useState(null);
	const sizes = ['S', 'M', 'XL', '2XL', '3XL'];

	return (
		<div className='mb-3'>
			<p className='lead mb-1'>Size: {selectedSize}</p>
			<div className='flex flex-gap-1 size-selector'>
				{sizes.map((size) => {
					return (
						<button
							key={size}
							onClick={() => setSelectedSize(size)}
							className={`btn ${selectedSize === size ? 'selected' : ''}`}
						>
							{size}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default SizeSelector;
