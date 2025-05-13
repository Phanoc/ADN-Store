import React from 'react';
import CartItems from './CartItems';

const Cart = () => {
	return (
		<div className='container cart'>
			<div className='grid-2-col'>
				<div className='flex flex col'>
					<CartItems />
				</div>
			</div>
		</div>
	);
};

export default Cart;
