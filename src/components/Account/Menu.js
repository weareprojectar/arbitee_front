import React from 'react';
import { Link } from 'react-router';
import './Menu.css';

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
    {children}
  </div>
)


const Menu = () => {
  return (
    <div className="menu">
      <MenuItem>가이드</MenuItem>
      <MenuItem>계좌만들기</MenuItem>
      <MenuItem>입금하기</MenuItem>
    </div>
  )
}

export default Menu;
