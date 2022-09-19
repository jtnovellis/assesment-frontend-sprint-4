import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { title, category, description, image, price } = productDetail;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(`${process.env.REACT_APP_API_URL}/${id}`);
        setProductDetail(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='productDetail'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='cardDetail'>
          {' '}
          <div className='productDetail__data'>
            <div className='productDetail__data--img'>
              <img src={image} alt={title} />
            </div>
            <div className='productDetail__data--info'>
              <div className='info--title'>
                <h3>{title}</h3>
              </div>
              <div className='productDetail__data--price'>
                <p>
                  <b>Category:</b> {category}
                </p>
                <p>
                  <b>Price:</b> ${price}
                </p>
              </div>
              <div className='productdetail__data--button'>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div className='productDetail__description'>
            <h4>Description:</h4>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
