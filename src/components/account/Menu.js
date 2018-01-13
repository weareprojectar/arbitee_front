import React from 'react';
import { Link } from 'react-router';
import '../../style.css';

const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <MenuItem to={'/account/guide'}>가이드</MenuItem>
        <MenuItem to={'/account/accountCreate'}>계좌만들기</MenuItem>
        <MenuItem to={'/account/deposit'}>입금하기</MenuItem>
      </div>
    </div>
  )
}

export default Menu;
