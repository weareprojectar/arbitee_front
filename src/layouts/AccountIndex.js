import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class AccountIndex extends React.Component {
  render () {
    return (
      <div>
        <div><Header/></div>
        <div className="content">
          <h3>계좌가 없습니다. 계좌를 생성하시겠습니까?</h3>
          <Link to={'account'}><button class="massive ui button">Create</button></Link>
          <Link to={'fundsimple'}><button class="massive ui button">Around</button></Link>
        </div>
      </div>
    );
  }
}

export default AccountIndex;