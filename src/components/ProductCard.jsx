import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showAlert } from '../store/alerts/alertsSlice';
import { cartActions } from '../store/cart/cartSlice';
import Timer from './Timer';

const ProductCard = ({ title, price, id, image }) => {
  const random = 10;

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(
      showAlert({
        active: true,
        message: 'The product was added successfully',
        type: 'success',
      })
    );
    dispatch(cartActions.addItemToCart({ title, price, id, image }));
  }
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
          <Timer random={random} />
        </div>
      </div>
      <div className='productCard__buttons'>
        <button onClick={addToCart}>Add to cart</button>
        <button>
          <Link to={`/details/${id}`}>Go to Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
