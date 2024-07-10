import React, { useState } from 'react';
import './Cart.css';
import{ CartItems } from "../CartItems/CartItems"

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddItem = () => {
        setCartItems([
            ...cartItems,
            {
                id: Date.now(),
                name: '',
                brand: '',
                type: '',
                price: 0,
                quantity: 1,
                image: ''
            }
        ]);
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div>
            <header>
                <a href="/" className="logo">BrandWatch</a>
                <nav>
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </nav>
                <a href="/signup" className="signup-btn">Sign Up</a>
            </header>

            <div className="breadcrumb">
                <a href="/">Home</a> &gt; <a href="/products">Products</a> &gt; Cart
            </div>

            <div className="cart-container">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product Images</th>
                            <th>Product Description</th>
                            <th>Price</th>
                            <th>Unit</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={item.image}
                                        onChange={(e) => handleInputChange(item.id, 'image', e.target.value)}
                                    />
                                    {item.image && <img src={item.image} alt={item.name} />}
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        value={item.name}
                                        onChange={(e) => handleInputChange(item.id, 'name', e.target.value)}
                                    /><br />
                                    <small>
                                        <input
                                            type="text"
                                            placeholder="Brand"
                                            value={item.brand}
                                            onChange={(e) => handleInputChange(item.id, 'brand', e.target.value)}
                                        /> | 
                                        <input
                                            type="text"
                                            placeholder="Type"
                                            value={item.type}
                                            onChange={(e) => handleInputChange(item.id, 'type', e.target.value)}
                                        />
                                    </small>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        value={item.price}
                                        onChange={(e) => handleInputChange(item.id, 'price', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleInputChange(item.id, 'quantity', item.quantity - 1)}>-</button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <button onClick={() => handleInputChange(item.id, 'quantity', item.quantity + 1)}>+</button>
                                    </div>
                                </td>
                                <td>₦{item.price * item.quantity}</td>
                                <td><button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>x</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="add-item-btn" onClick={handleAddItem}>Add Item</button>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>{cartItems.length} Items</p>
                    <p className="total"><span>Total</span> <span>₦{calculateTotal()}</span></p>
                    <button className="checkout-btn">Check Out</button>
                </div>
            </div>

            <footer>
                <div className="footer-content">
                    <a href="/" className="logo">BrandWatch</a>
                    <nav>
                        <a href="/">HOME</a>
                        <a href="/products">OUR PRODUCTS</a>
                        <a href="/contact">CONTACT US</a>
                        <a href="/about">ABOUT US</a>
                        <a href="/location">LOCATION</a>
                    </nav>
                    <div className="social-links">
                        <a href="#">X</a>
                        <a href="#">F</a>
                        <a href="#">I</a>
                    </div>
                </div>
                <p>Please Follow Us!</p>
            </footer>
        </div>
    );
};

export default Cart;
