import React from 'react';
import { useState } from 'react';
import classes from './ProductDetails.module.css';
import { useParams, useLoaderData } from 'react-router-dom';
import Colors from '../components/Products/Colors';
import Size from '../components/Products/Size';
import { AiOutlineHeart } from 'react-icons/ai';

export default function ProductDetailsPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const params = useParams();
  const product = useLoaderData();

  console.log(product);

  function onAddHandler() {}

  return (
    <div className={classes.container}>
      <div className={classes.images}>
        {Object.values(product.subProducts[selectedColor].images).map((url) => {
          return <img className={classes.img} src={url} />;
        })}
      </div>
      <div className={classes.info}>
        <div className={classes.title}>{product.title}</div>
        <div className={classes.price}>
          {product.price}
          {' TL'}
        </div>
        <div className={classes.colorContainer}>
          <div>Renkler: </div>
          <Colors
            items={product.subProducts}
            onChooseColor={setSelectedColor}
          />
        </div>
        <div className={classes.colorContainer}>
          <div>Bedenler: </div>
          <div className={classes.sizes}>
            {Object.entries(product.subProducts[selectedColor].sizes).map(
              (size, index) => {
                return (
                  <Size
                    key={index}
                    size={size[0]}
                    available={size[1]}
                    onAdd={onAddHandler}
                  />
                );
              }
            )}
          </div>
        </div>
        <div className={classes.favIcon}>
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const response = await fetch(
    `https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/sweatshirts/${params.productId}.json`
  );

  if (!response.ok) {
    throw new Error('Could not fetch product details');
  }

  const data = await response.json();

  return data;
}
