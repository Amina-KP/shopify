import React, { createContext, useState } from 'react';
import { products } from '../products';
import { CartItem } from '../pages/cart/CartItem';

export const ShopContext = createContext(null);



const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getFullAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price; // Use += to accumulate the total
      }
    }
    return total; // Return the calculated total
  };
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateAmount=(itemId,newAmount)=>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}));
  };

  const contextValue = { cartItems, addToCart, removeFromCart,updateAmount,getFullAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
