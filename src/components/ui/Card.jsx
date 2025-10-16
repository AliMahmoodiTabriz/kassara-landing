import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  const hoverClass = hover ? 'hover:shadow-xl transition-all duration-300' : '';
  return (
    <div className={`bg-gray-900 rounded-xl shadow-lg border border-gray-800 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

