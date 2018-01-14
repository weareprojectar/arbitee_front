import React, { Component } from 'react';
import Header from '../components/Header';
import Portfoliodetail from '../components/portfolio/Portfolio';

class Portfolio extends Component {
  render() {
    return (
        <div>
          <div>
            <Header/>
          </div>

          <div>
            <Portfoliodetail/>
          </div>
          {this.props.children}
        </div>
    );
  }
}

export default Portfolio;
