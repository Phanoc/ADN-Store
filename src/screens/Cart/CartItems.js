import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import './CartItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartItems = (props) => {
	const { cartItems, deleteAddedItem } = useContext(AppContext);

	useEffect(() => {
		props.onPassingItemList(cartItems);
	}, [cartItems, props.onPassingItemList]);

	return (
		<div className='cart-items'>
			{cartItems?.length > 0 ? (
				<div className='flex flex-col cart-items-control'>
					{cartItems.map((item, index) => {
						return (
							<div
								key={`${item.id}-${item.selectedSize}-${index}`}
								className='grid cart-item'
							>
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
								<div
									className='delete-item-btn'
									onClick={() => deleteAddedItem(item.id, item.selectedSize)}
								>
									<FontAwesomeIcon icon={faXmark} />
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div
					className='flex justify-center items-center'
					style={{ width: '100%' }}
				>
					<div className='text-center'>
						<h3 className='fs-md mb-2'>Your Shopping Cart is Empty</h3>
						<Link
							to='/home'
							className='btn btn-primary lead'
							style={{ width: '100%' }}
						>
							Continue Shopping
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartItems;
