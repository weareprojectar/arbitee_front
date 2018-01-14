import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeMenu from '../components/home/HomeMenu';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeMenu/>
      </div>
    );
  }
}

export default Home;
