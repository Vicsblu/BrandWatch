import React, { useContext } from 'react';
import './CSS/About.css'
import { useState,useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';

const About = () => {
  const {theme}=useContext(ShopContext);
  return (
    <div className={'about_page_'+theme}>
      <h1 className="text-center mt-4" id = "aboutheading"><strong>About Us</strong></h1>
    <div className="container-my d-flex align-items-center justify-content-center border shadow-lg rounded py-4">
      <div className="content">
      <p className="txt py-5">
        Welcome to BrandWatch, the ultimate destination for luxurious timepieces. We specialize in curating an exclusive collection of premium watches that embody elegance, precision, and sophistication. Our commitment to quality ensures that each watch we offer meets the highest standards of craftsmanship and style. Whether you're seeking a timeless classic or a modern statement piece, discover the perfect accessory to complement your unique taste at BrandWatch. Indulge in the art of fine watchmaking with us.

---
      </p>
    </div>
    
    <div className='container-2 d-flex flex-column align-items-center justify-content-center border-1'>
      <h2 className='text-center mb-4'><strong>Why Choose Us ?</strong></h2>
      <div class="accordion" style={{ width: '1000px' }} id="accordionExample">
      <div class="accordion-item shadow">
        <h2 class="accordion-header">
          <button class="accordion-button text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: "#ff4141"}} >
          Affordable Online Shopping at Your Fingertips
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show text-body" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          Shopping online offers numerous advantages. At BrandWatch, you can take your time browsing through a diverse selection of luxurious watches to find exactly what you desire. It's simple to compare prices and discover the perfect timepiece that suits your taste and budget. With BrandWatch, you have access to the finest watches at competitive prices. Whether you're looking for a stylish gift for friends or family, or treating yourself to a new watch, you'll find exceptional options online with us.
          </div>
        </div>
      </div>
      <div class="accordion-item shadow">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{background: "#ff4141"}}>
          A Huge Collection of Luxirious Watches Across All Categories
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse text-light" data-bs-parent="#accordionExample">
          <div class="accordion-body text-body">
            We have a very wide range of watches in all categories. For men, women and kids.  In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. 
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About;
