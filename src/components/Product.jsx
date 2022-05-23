import React from 'react';
import { currency } from './../utils/functions'

// Patrón de diseño Composición
const Product = ({ product, handleAddToCart }) => {

  const { attributes: { title, image, price } } = product;
  const img = `http://localhost:1337${image.data[0].attributes.url}`;

  return (
    <div className="Products-item">
      <img src={img} alt={title} />
      <div className="Product-item info">
        <h2>
          {title.substr(0, 20)}
        </h2>
        <span>
          {currency(price)}
        </span>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  )
};

export default Product;
