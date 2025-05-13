import React from 'react';

const CartItems = (props) => {
  return (
    <div className='dropdown-item flex'>
      <img src={props.image} alt={props.name} />
      <p></p>
    </div>
  );
};

export default CartItems;
