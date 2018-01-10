import React from 'react';
import Menu from './Menu.js';


class Account extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        {this.props.children}
      </div>
    );
  }
}

export default Account;
