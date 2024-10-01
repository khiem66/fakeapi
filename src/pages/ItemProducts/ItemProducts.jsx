import React from "react";
import './ItemProducts.css'

const ItemProducts = ({ product }) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1> {product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.id}</p>
          <img src={product.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ItemProducts;
