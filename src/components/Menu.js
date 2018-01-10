import React from 'react';
import './Menu.css';

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
    {children}
  </div>
)
