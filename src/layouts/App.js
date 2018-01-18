import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import AccountIndex from './AccountIndex';
import Account from './Account';
import SignIn from './SignIn';
import SignUp from './SignUp';
import InfoPage from './InfoPage';
import FundSimple from './FundSimple';
import FundDetail from './FundDetail';
import NotFound from './NotFound';

import Header from './../components/Header';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <Route path="/fundsimple" component={FundSimple} />
              <Route path="/funddetail" component={FundDetail} />
              <Route component={NotFound}/>
            </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
