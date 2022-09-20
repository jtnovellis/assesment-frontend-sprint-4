import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ListOfProductCards = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // eslint-disable-next-line no-undef
        const response = await axios(process.env.REACT_APP_API_URL);
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
