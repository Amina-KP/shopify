import React from "react";
import "./shop.css";
import { products } from "../../products";
import { Products } from "./Products";
export const Shop= ()=>{
    return(
    <div>
        <div className="shopTitle"><h1>SHOPIFY</h1>
        </div>
        <div className="products">
            {products.map((product)=>(
                <Products key={product.id} data={product}/>
                )    
            )}
        </div>

    </div>);
};