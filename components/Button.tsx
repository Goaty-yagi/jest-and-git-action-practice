import React, { useState, FC, ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ disabled, onClick, children }) => {
  return (
    <button type="submit" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
