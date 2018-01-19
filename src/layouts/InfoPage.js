import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';

const logged = true;

class InfoPage extends React.Component {
  render () {
    return (
      <div>
        <div><Header/></div>
        <div>
          {
            !logged && <Redirect to="/signin"/>
          }
          당신의 정보입니다.
        </div>
      </div>
    );

  }
}

export default InfoPage;
