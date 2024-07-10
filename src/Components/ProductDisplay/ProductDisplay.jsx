import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { useLinkClickHandler } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState("S"); // State for selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };
 const {theme}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 className={`ph1_${theme}`}>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p className={`ph1_${theme}`}>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className={`productdisplay-right-description pdiv_${theme}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          aspernatur assumenda cum eligendi tenetur, enim, expedita beatae,
          quasi et esse ipsam. Unde error quae animi distinctio numquam, a
          quidem dicta!
        </div>
        <div className="productdisplay-right-quantity">
          <h1 className={`ph1_${theme}`}>Select Quantity</h1>
          <input
            type="number"
            min="1"
            value={selectedQuantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            addToCart(product.id, selectedSize, selectedQuantity)
            toast.success("Item added to cart",{
              autoClose:1500,
              closeButton: false
            })
          }}
        > 
          ADD TO CART
        </button>
        <ToastContainer toastStyle={{fontWeight:"bold",marginTop:"68px"}}/>
        <p className={"productdisplay-right-category pdiv_"+theme}>
          
        </p>
        <p className={"productdisplay-right-category pdiv_"+theme}>
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
