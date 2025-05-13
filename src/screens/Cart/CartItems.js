import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const CartItems = (props) => {
	const { cartItems } = useContext(AppContext);

	return (
		<div>
			{cartItems.length > 0 ? (
				<div className='flex flex-col'>
					{cartItems.map((item) => {
						return (
							<div key={item.id} className='flex'>
								<img src={item.image} alt='' />
								<div>
									<p className='fs-sm'>{item.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<p style={{ color: 'black' }}>Chua co gi trong gio hang</p>
			)}
		</div>
	);
};

export default CartItems;
