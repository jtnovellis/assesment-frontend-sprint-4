import React from 'react';
import ProductCard from './ProductCard';

const products = [
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
];

const ListOfProductCards = () => {
  return (
    <div>
      <h1>ListOfProductCards</h1>
      {products.map(({ title, price, id }) => (
        <ProductCard key={id} title={title} price={price} id={id} />
      ))}
    </div>
  );
};

export default ListOfProductCards;
