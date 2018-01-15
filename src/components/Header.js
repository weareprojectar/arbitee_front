import React from 'react';
import { Link } from 'react-router-dom';
import '../resource/Header.css';

import InfoPage from '../layouts/InfoPage';



const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <div>
      <Link to={'/'}><div className="logo">AR</div></Link>
      <div className="menu">
        <MenuItem to={'/'}>LOGOUT</MenuItem>
        <MenuItem to={'/infopage'}>MYPAGE</MenuItem>
      </div>
    </div>
  )
}

export default Header;
