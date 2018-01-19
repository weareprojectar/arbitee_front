import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import SimpleChart from '../components/fund/SimpleChart';

class FundSimple extends React.Component {
  render () {
    return (
      <div>
        <div><Header/></div>
        <button type="button">포트폴리오 만들기</button>
        <div>
          여기서 포트폴리오 목록들 쫙!
          <Link to={'funddetail'}>차트차트</Link>
          <SimpleChart/>
        </div>
      </div>
    );
  }
}

export default FundSimple;
