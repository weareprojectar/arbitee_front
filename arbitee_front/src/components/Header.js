import React from 'react';
import { Link } from 'react-router';
import '../style.css';

const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <div>
      <div className="logo">AR</div>
      <div className="menu">
        <MenuItem to={'/home'}>LOGOUT</MenuItem>
        <MenuItem>MYPAGE</MenuItem>
      </div>
    </div>
  )
}

export default Header;
