import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <div>
        <p>This is an image</p>
      </div>
      <div>
        <p>Title</p>
        <p>Image</p>
        <p>id: {id}</p>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
