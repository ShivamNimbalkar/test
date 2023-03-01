import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
      });
  }, []);
  console.log(data);

  return (
    <>
      <h1>Products</h1>

      {data.filter(elem => elem.brand === "Samsung").map((curelem) => {
        return (
          <>
            <p>{curelem.id}</p>
            <p>{curelem.brand}</p>
            <p>{curelem.category}</p>
          </>
        );
      })}
    </>
  );
};

export default Products;
