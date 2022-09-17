import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, price, id, image }) => {
  function addToCart() {}
  return (
    <div className='productCard'>
      <div className='productCard__img'>
        <img src={image} alt={title} loading='lazy' />
      </div>
      <div className='productCard__info'>
        <h3>{title}</h3>
        <div>
          <p>
            <b>Price:</b> ${price}
          </p>
          <p>00:00:00</p>
        </div>
      </div>
      <div className='productCard__buttons'>
        <button onClick={addToCart}>Add to cart</button>
        <button>
          <Link to={`/productdetail/${id}`}>Go to Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
