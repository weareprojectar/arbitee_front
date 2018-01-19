import React, { Component } from 'react';

import Header from '../components/Header';
import Portfoliodetail from '../components/fund/Portfolio';

class FundDetail extends Component {
  render() {
    return (
      <div>
        <div><Header/></div>
        <div>
          <Portfoliodetail/>
        </div>
      </div>
    );
  }
}

export default FundDetail;
