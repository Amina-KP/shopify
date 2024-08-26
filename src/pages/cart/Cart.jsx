import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { products } from "../../products";
import { CartItem } from "./CartItem"; // Ensure you import CartItem component if you haven't
import "./cart.css";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate=useNavigate();
  const { cartItems,getFullAmount } = useContext(ShopContext);
  const totalAmount=getFullAmount();
  return (
    <div className="cart">
      <div>
        <h1>CART ITEMS</h1>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem key={product.id} data={product} />
            );
          }
        })}
      </div>
      {totalAmount>0?
      <div className='checkout'>
          <p>SubTotal:${totalAmount}</p>
          <button onClick={()=>navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      :<h1>Your Cart is Empty</h1>}
    </div>
    
  );
};
