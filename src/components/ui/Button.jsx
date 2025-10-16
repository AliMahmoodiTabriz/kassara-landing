import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

