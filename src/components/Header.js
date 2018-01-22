import React from 'react';
import { Link } from 'react-router-dom';
import '../resource/Header.css';
import logo from "../resource/logo.png"
import InfoPage from '../layouts/InfoPage';


const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <body>
      <div id="wrap">
        <header class="header">
          <nav className="nav" >
          <div className="container">
            <img  src={logo} />
          </div>
          <div className="buttons">
            <span><MenuItem to={'/'}><button class="ui teal button">LOGOUT</button></MenuItem></span>
            <span><MenuItem to={'/infopage'}><button class="ui teal button">MYPAGE</button></MenuItem></span>
          </div>
          </nav>
        </header>                
      </div>
    </body>
  )
}

export default Header;
