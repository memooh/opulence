import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">Let's make your home beautiful together</h1>
        <p className="hero-subtitle">
          There are many variations of the passages of <br /> lorem Ipsum from available, majority.
        </p>
        <Button onClick={() => console.log('Clicked!')} variant="primary">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Hero;
