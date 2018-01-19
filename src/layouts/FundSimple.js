import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SimpleChart from '../components/fund/SimpleChart';
import BTC from '../components/fund/BTC'

class FundSimple extends React.Component {
  render () {
    return (
      <div>
        <button type="button">포트폴리오 만들기</button>
        <div>
          여기서 포트폴리오 목록들 쫙!
          <Link to={'funddetail'}>Fund_1</Link>
          <SimpleChart/>
          <BTC/>
        </div>
      </div>
    );
  }
}

export default FundSimple;
