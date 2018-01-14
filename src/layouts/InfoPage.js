import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const logged = true;

class InfoPage extends React.Component {
  render () {
    return (
      <div>
        {
          !logged && <Redirect to="/signin"/>
        }
        당신의 정보입니다.
      </div>
    );

  }
}

export default InfoPage;
