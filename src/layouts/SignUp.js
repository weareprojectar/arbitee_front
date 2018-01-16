import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/sign/SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

class SignUp extends React.Component {
  render () {
    const { userSignupRequest } = this.props;
    return(
      <div>
        <SignUpForm userSignupRequest={userSignupRequest}/>
      </div>
    );

  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignUp);
