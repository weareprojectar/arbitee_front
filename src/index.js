import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './layouts/Home';
import Header from './components/Header';
import Account from './layouts/Account';
import AccountGuide from './layouts/AccountGuide';
import AccountCreate from './layouts/AccountCreate';
import AccountDeposit from './layouts/AccountDeposit';


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={Home}>
    </Route>
    <Route path="account" component={Account}>
      <IndexRoute path="guide" component={AccountGuide}/>
      <Route path="accountCreate" component={AccountCreate}/>
      <Route path="deposit" component={AccountDeposit}/>
    </Route>
    <Route path="home" component={Home}>
    </Route>
  </Router>,
  document.getElementById('root')
);
