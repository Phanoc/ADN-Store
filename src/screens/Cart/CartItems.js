import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './CartItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
	const { cartItems } = useContext(AppContext);

	return (
		<div className='cart-item'>
			{cartItems.length > 0 ? (
				<div className='flex flex-col'>
					{cartItems.map((item) => {
						return (
							<div key={item.id} className='grid'>
								<img src={item.image} alt='' className='item-img' />
								<div>
									<h3 className='lead mb-2'>{item.name}</h3>
									<p className='dimmer-text' style={{ marginBottom: '5px' }}>
										<i>Size</i>
									</p>
									<p className='mb-2'>{item.selectedSize}</p>
									<p className='fs-sm mb-2 dimmer-text word-wrap'>
										{item.description}
									</p>
								</div>
								<p className='lead color-primary'>${item.price}.00</p>
								<div className='delete-item-btn '>
									<FontAwesomeIcon icon={faXmark} />
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
