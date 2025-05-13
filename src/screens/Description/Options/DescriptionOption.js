import React from 'react';
import SizeSelector from './SizeSelector';
import './DescriptionOprion.css';

const DescriptionOption = (props) => {
	return (
		<div className='desc-option p-3 mb-3'>
			<SizeSelector />
			<button className='btn btn-primary lead' style={{ width: '100%' }}>
				Add to cart
			</button>
		</div>
	);
};

export default DescriptionOption;
