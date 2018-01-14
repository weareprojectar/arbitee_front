import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import AccountIndex from './AccountIndex';
import Account from './Account';
import SignIn from './SignIn';
import SignUp from './SignUp';
import InfoPage from './InfoPage';
import FundSimple from './FundSimple';
import NotFound from './NotFound';

import Header from './../components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Header/>
            <Switch>
              <Route path="/accountindex" component={AccountIndex}/>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/account" component={Account} />
              <Route path="/infopage" component={InfoPage} />
              <Route path="/fundsimple" component={FundSimple} />              <Route component={NotFound}/>
            </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
