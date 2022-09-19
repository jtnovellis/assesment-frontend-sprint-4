import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';

const ListOfProductCards = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios('https://fakestoreapi.com/products');
        setProductsList(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setProductsList]);

  return (
    <div className='listOfProducts'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        productsList.map(({ title, price, id, image }) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            id={id}
            image={image}
          />
        ))
      )}
    </div>
  );
};

export default ListOfProductCards;
