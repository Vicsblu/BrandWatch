import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  // Remove this line if you're not using the theme variable
  // const { theme } = useContext(ShopContext);

  return (
    <div className="product-card">
      <Link to={`/product/${props.id}`} className="product-image-container ">
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="product-image"
        />
        {props.discount && (
          <span className="discount-badge">{props.discount}% OFF</span>
        )}
      </Link>
      <div className="product-details">
        <h5 className="product-title">{props.name}</h5>
        <div className="price-rating-container">
          <p className="price">
            <span className="current-price">₦{props.new_price}</span>
          </p>
          {/* Add the old price if there's a discount */}
          {props.discount && (
            <p className="old-price">
              <span>₦{props.old_price}</span>
            </p>
          )}
        </div>
      </div>
        <div className="btn-container">
          <Link to={`/product/${props.id}`} className="add-to-cart-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cart-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            BUY NOW
          </Link>
        </div>
      </div>
  );
};

export default Item;