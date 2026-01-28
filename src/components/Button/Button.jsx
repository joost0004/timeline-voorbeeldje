import React from 'react';
import './Button.scss';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = ''
}) => {
  return (
    <button
      className={`custom-btn ${variant} ${size} ${className}`}
      onClick={onClick}
    >
      <span className="btn-content">{children}</span>
      <div className="btn-glow" />
    </button>
  );
};
