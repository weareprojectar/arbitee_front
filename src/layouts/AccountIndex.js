import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class AccountIndex extends React.Component {
  render () {
    return (
      <div>
        <div><Header/></div>
        <div>
          <p>계좌가 없습니다. 계좌를 생성하시겠습니까?</p>
          <Link to={'account'}><button type="button">계좌 생성하기</button></Link>
          <Link to={'fundsimple'}><button type="button">둘러보기</button></Link>
        </div>
      </div>
    );
  }
}

export default AccountIndex;
