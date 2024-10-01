import axios from "axios";
import React, { useEffect, useState } from "react";
import ListProducts from "../ListProducts/ListProducts";

const TableProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ListProducts products={products} />
    </>
  );
};

export default TableProducts;
