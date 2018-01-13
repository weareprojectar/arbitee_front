import React, { Component } from 'react';

import Header from '../components/Header';
import Menu from '../components/account/Menu';




class Account extends Component {
  render() {
    return (
        <div>
          <div>
            <Header/>
          </div>
          <div>
            <Menu/>
          </div>
          {this.props.children}
        </div>
    );
  }
}



export default Account;
