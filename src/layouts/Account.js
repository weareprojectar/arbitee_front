import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import AccountMenu from '../components/account/AccountMenu';

import AccountGuide from './AccountGuide';
import AccountCreate from './AccountCreate';
import AccountDeposit from './AccountDeposit';


class Account extends Component {
  render() {
    return (
        <div>
          <div>
            <AccountMenu/>
          </div>
          <Route path="/account/guide" component={AccountGuide}/>
          <Route path="/account/accountCreate" component={AccountCreate}/>
          <Route path="/account/deposit" component={AccountDeposit}/>
        </div>
    );
  }
}



export default Account;
