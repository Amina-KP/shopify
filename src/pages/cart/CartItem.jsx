import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export const CartItem = (props) => {
  const {cartItems,addToCart,removeFromCart,updateAmount}=useContext(ShopContext);
  const { id, name, price, image } = props.data;
  return (
    <div className='cartItems'>
      <img src={image} />
      <div className='description'>
        <p><b>{name}</b></p>
        <p><b>${price}</b></p>
        <div className='changeCount'>
        <button onClick={()=>{removeFromCart(id)}}>-</button>
        <input value={cartItems[id]} onChange={(e) => updateAmount(id, Number(e.target.value))}/>

          <button onClick={()=>{addToCart(id)}}>+</button> 
        </div>
      </div>
      
    </div>
  )
}
