import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export const Products = (props) => {
  const {addToCart,cartItems}=useContext(ShopContext);
  const { id, name, price, image } = props.data;
  const cartItemsAmount=cartItems[id];
  return (
    <div className='product'>
      <img src={image}/>
      <div className='description'>
        <p><b>{name}</b></p>
        <p><b>${price}</b></p>
      </div>
      <button className='addToCartBttn' onClick={()=>{addToCart(id)}}>Add To Cart{cartItemsAmount>0 &&<>({cartItemsAmount})</>}</button>
    </div>
  );
};
