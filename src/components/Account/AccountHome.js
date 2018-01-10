import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Guide from './containers/Guide';
import MakeAccount from './containers/MakeAccount';
import Deposit from './containers/Deposit';

//css 일단 생략
//
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path='/' component={Account}>
//       <IndexRoute component={Guide}/>
//       <Route path="makeaccount" component={MakeAccount}/>
//       <Route path="Deposit" component={Deposit}/>
//     </Route>
//   </Router>,
//   document.getElementById('root'),
// );
