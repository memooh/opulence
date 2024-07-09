import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', className = '', variant = 'primary' }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`opulence-btn opulence-btn-${variant} ${className}`}
    >
      {children}
      <span className="btn-arrow">→</span>
    </button>
  );
};

export default Button;