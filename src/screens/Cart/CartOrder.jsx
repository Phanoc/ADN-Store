import React from 'react';
import './CartOrder.css';
import { Link } from 'react-router-dom';

const CartOrder = (props) => {
	const itemList = props.items;
	const totalPrice = itemList.reduce(
		(acc, item) => acc + parseFloat(item.price),
		0
	);

	return (
		<div>
			<div className='cart-order p-1 mb-1'>
				<h3 className='lead order-title mb-1 '>Order Summary</h3>
				<div>
					{itemList?.length > 0 &&
						itemList.map((item, index) => {
							return (
								<div
									className='flex justify-between mb-1'
									key={`${item.id}-${item.selectedSize}-${index}`}
								>
									<p className='fs-sm order-item-name '>{item.name}</p>
									<p className='fs-sm color-primary'>${item.price}.00</p>
								</div>
							);
						})}
				</div>
				<div className='flex justify-between order-total mb-1'>
					<p className='fs-sm fw-bold'>Total Price: </p>
					<p className='fs-sm color-primary fw-bold'>
						${totalPrice.toFixed(2)}
					</p>
				</div>
				<button className='btn btn-primary' style={{ width: '100%' }}>
					<i className='fw-bolder lead'>Pay</i>
				</button>
			</div>
			<Link to='/home' className='flex justify-center'>
				<p className='linked-text'>CONTINUE SHOPPING</p>
			</Link>
		</div>
	);
};

export default CartOrder;
