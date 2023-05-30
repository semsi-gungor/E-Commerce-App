import React, { useEffect, useState, useContext } from "react";
import Product from "../components/Products/Product";
import ScrollUpButton from "../components/UI/ScrollUp/ScrollUpButton";
import classes from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/sweatshirts.json"
      );
      const responseData = await response.json(); // burdan asenkron olarak dönnen json objesi js objesine dönüştürülür
      console.log(responseData);
      setProducts(responseData);
    };

    fetchMeals();
  }, []);

  return (
    <div className={classes.container}>
      <ScrollUpButton />
      {products.map((product, index) => {
        return <Product key={product.id} product={product} index={index} />;
      })}
    </div>
  );
}

export default Products;
