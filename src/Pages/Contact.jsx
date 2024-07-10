import React, { useContext } from 'react';
import './CSS/Contact.css'
import { ShopContext } from '../Context/ShopContext';

const Contact = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className={"container-my_"+theme}>
      <h1 id="myheading">
        Contact Us
      </h1>
      <p>
      At BrandWatch, we value our customers and are here to assist you with any questions or concerns you may have. Whether you need help selecting the perfect watch, have inquiries about your order, or require assistance with our services, our dedicated team is ready to help.</p>
        <p>Get in Touch:</p>
          <p>Email: support@brandwatch.com</p>
          <p>Phone: +1-800-123-4567</p>
            <p>Address: 123 Luxury Lane, Suite 456, Cityville, ST 78901</p>
              <p>Customer Service Hours:</p>
<p>Monday to Friday: 9 AM - 6 PM</p>
<p>Saturday: 10 AM - 4 PM</p>
<p>Sunday: Closed</p>
<p>You can also fill out the contact form on our website, and we will get back to you as soon as possible.
</p>
<p>Thank you for choosing BrandWatch. We look forward to assisting you!</p>
    <p>
      In Case of any grievance, don't hesitate to get in touch with us on our official contact number xxxxxxxxxx. Or you can write to us at xyz@gmail.com.
      </p>

      </div>
  );
};

export default Contact;