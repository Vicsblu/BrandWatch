import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/quick-navigations">Quick Navigations</a>
        <a href="/">Our Products</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
        <a href="/location">Location</a>
      </div>
      <div className="social-links">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x" /> {/* or <i className="fas fa-xmark" /> */}
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
      <div className="footer-note">
        Please Follow Us!
      </div>
    </footer>
  );
}

export default Footer;
