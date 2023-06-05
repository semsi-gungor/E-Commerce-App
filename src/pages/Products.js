import React, { useEffect, useState, useContext } from 'react';
import Product from '../components/Products/Product';
import ScrollUpButton from '../components/UI/ScrollUp/ScrollUpButton';
import classes from './Products.module.css';
import Filter from '../components/Products/Filter';
import FilterSection from '../components/Filter/FilterSection';
import useDelayedAnimation from '../hooks/use-delayed-unmount';

function Products() {
  const [products, setProducts] = useState([]);
  const [filterIsMounted, filterIsAnimating, toggleFilter] =
    useDelayedAnimation(310);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/sweatshirts.json'
      );
      const responseData = await response.json(); // burdan asenkron olarak dönnen json objesi js objesine dönüştürülür
      console.log(responseData);
      setProducts(responseData);
    };

    fetchMeals();
  }, []);

  return (
    <>
      <Filter onClick={toggleFilter} />
      {filterIsMounted && (
        <FilterSection
          toggle={toggleFilter}
          isAnimating={filterIsAnimating}
          direction={'right'}
        />
      )}
      <div className={classes.container}>
        <ScrollUpButton />
        {products.map((product, index) => {
          return <Product key={product.id} product={product} index={index} />;
        })}
      </div>
    </>
  );
}

export default Products;
