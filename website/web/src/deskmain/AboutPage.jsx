import React from 'react';

import sampleProperty1 from './images1/2.jpg';
import sampleProperty2 from './images1/3.jpg';
import sampleProperty3 from './images1/4.jpg';
import heroImage from './images1/5.jpg';
import step1Image from './images1/6.jpg';
import step2Image from './images1/7.jpg';
import step3Image from './images1/8.jpg';

function HomePage() {
  return (
    <div className="homepage">
      {/* <header className="header">
        <div className="logo">NexGenTech</div>
        <nav className="nav">
          <a href="#buying">Buying</a>
          <a href="#renting">dev</a>
          <a href="#selling">order</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#login">Log in</a>
          <a href="#create-account" className="create-account">Create Account</a>
        </nav>
      </header> */}
        <h1>about EduMaterial Hub</h1>
      <section className="hero">
        <div className="hero-text">
        
          <h1>Find <span className="highlight">Perfect</span> Place To Live Life.</h1>
          <div className="search-form">
            <div className="search-options">
              <button>Order</button>
              <button>Get</button>
              <button>Buy</button>
            </div>
            <div className="search-fields">
              <input type="text" placeholder="Web Development" />
              <input type="text" placeholder="Graphics Designs" />
              <input type="text" placeholder="Digital Marketing" />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="services">
        <h2>The <span className="highlight">Services</span> You Get From NexGenTech</h2>
        <p>Some people choose price as a primary reason. Those companies that get customers because of low price will lose those customers.</p>
        <div className="service-cards">
          <div className="service-card">Buy</div>
          <div className="service-card">Order</div>
          <div className="service-card">Dev</div>
        </div>
      </section>

      <section className="properties">
        <h2>We Provide The <span className="highlight">Best</span> Based On The <span className="highlight">Technology</span> That You Like</h2>
        <div className="property-cards">
          <div className="property-card">
            <img src={sampleProperty1} alt="Property 1" />
            <h3>Digital Marketer</h3>
            <p>Juweria Dahir Abdirahman</p>
            <p>$4,870,00.00</p>
          </div>
          <div className="property-card">
            <img src={sampleProperty2} alt="Property 2" />
            <h3>Graphic Designer</h3>
            <p>Sabirin Mohamud Adan</p>
            <p>$2,500,00.00</p>
          </div>
          <div className="property-card">
            <img src={sampleProperty3} alt="Property 3" />
            <h3>FullStack Developer</h3>
            <p>Sabirin Mohamed Ali</p>
            <p>$3,386,00.00</p>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default HomePage;
