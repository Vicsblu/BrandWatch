import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [carts, setcarts] = useState([]);
  const [theme,setTheme]=useState("dark");
  const addToCart = (itemId, size, quantity) => {
    const existingcartIndex = carts.findIndex(item => item.id === itemId && item.size === size);
  
    if (existingcartIndex !== -1) {
      const updatedcarts = carts.map((item, index) => {
        if (index === existingcartIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });
      setcarts(updatedcarts);
    } else {
      const cartProduct = all_product.find((product) => product.id === itemId);
      cartProduct.size = size;
      cartProduct.quantity = quantity;
      setcarts([...carts, cartProduct]);
    }
  };
  
  const removeFromCart = (itemId) => {
    setcarts(carts.filter((product) => product.id !== itemId));
  };

  const getTotalCartAmount = () => {
    return carts.reduce((total, product) => total + (product.new_price * product.quantity), 0);
  };
  
  

  const getTotalcarts = () => {
    return carts.length;
  };

  const contextValue = {
    all_product,
    carts,
    theme,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalcarts,
    setTheme,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
