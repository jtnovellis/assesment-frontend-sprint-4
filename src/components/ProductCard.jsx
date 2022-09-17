import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, price, id }) => {
  return (
    <div>
      <div>
        <p>This is an image</p>
      </div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div>
        <button>Add to cart</button>
        <button>
          <Link to={`/productdetail/${id}`}>Go to Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
