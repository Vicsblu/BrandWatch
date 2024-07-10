import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="payment-method">
        <h2>Choose payment method</h2>
        <label>
          <input type="radio" name="payment-method" value="debit-card" defaultChecked />
          Debit card
        </label>
      </div>
      <div className="card-details">
        <h2>Card details</h2>
        <form>
          <div className="form-group">
            <label>Card name</label>
            <input type="text" placeholder="Enter name on the card" />
          </div>
          <div className="form-group">
            <label>Card details</label>
            <input type="text" placeholder="Card number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Billing address</label>
            <input type="text" placeholder="Enter billing address" />
          </div>
          <button type="submit">Pay (₦674,310)</button>
        </form>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: ₦887,880</p>
        <p>Discounts (25%): -₦221,970</p>
        <p>Delivery Fee: ₦8,400</p>
        <h3>Total: ₦674,310</h3>
        <button onClick={() => window.history.back()}>Go back to Cart</button>
      </div>
    </div>
  );
}

export default Checkout;
