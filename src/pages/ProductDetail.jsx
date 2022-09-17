import React from 'react';
import { useParams } from 'react-router-dom';

/* const products = [
  { title: 'this is a product', price: 234, id: 1 },
  { title: 'this is a product', price: 234, id: 2 },
  { title: 'this is a product', price: 234, id: 3 },
  { title: 'this is a product', price: 234, id: 4 },
  { title: 'this is a product', price: 234, id: 5 },
  { title: 'this is a product', price: 234, id: 6 },
  { title: 'this is a product', price: 234, id: 7 },
  { title: 'this is a product', price: 234, id: 8 },
  { title: 'this is a product', price: 234, id: 9 },
  { title: 'this is a product', price: 234, id: 10 },
]; */

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
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
        <button>Go to Details</button>
      </div>
    </div>
  );
};

export default ProductDetail;
