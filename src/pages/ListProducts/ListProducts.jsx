import React from "react";
import ItemProducts from "../ItemProducts/ItemProducts";

const ListProducts = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <ItemProducts product={product} key={index} />
      ))}
    </div>
  );
};

export default ListProducts;
