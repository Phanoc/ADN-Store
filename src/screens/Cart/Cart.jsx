import React, { useState } from 'react';
import CartItems from './CartItems';
import CartOrder from './CartOrder';
import './Cart.css';

const Cart = () => {
	const [itemsList, setItemsList] = useState([]);
	const passingItemListHandler = (list) => {
		setItemsList(list);
		console.log(list);
	};

	return (
		<div className='container cart'>
			<div
				className={`flex 
					${itemsList?.length > 0 ? '' : 'flex-col'}`}
			>
				<CartItems onPassingItemList={passingItemListHandler} />
				{itemsList?.length > 0 && <CartOrder items={itemsList} />}
			</div>
		</div>
	);
};

export default Cart;
