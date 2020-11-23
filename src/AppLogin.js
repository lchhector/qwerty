import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AppDashboard from './AppDashboard';
import LoginPage from './screens/login';
import SignupPage from './screens/signup';
import BasicInfo from './screens/basicInfo';
import WhoAreYou from './screens/whoAreYou';
import MoreAboutYou from './screens/moreAboutYou';
import WhatDoYouWant from './screens/whatDoYouWant';
import StudentDashboard from './screens/studentDashboard';

const App = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <Router>
      <Switch>
        <Route exact path="/" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/basic-info" component={BasicInfo} />
        <Route path="/who-are-you" component={WhoAreYou} />
        <Route path="/more-about-you" component={MoreAboutYou} />
        <Route path="/what-do-you-want" component={WhatDoYouWant} />
        <Route path="/overview/" component={AppDashboard} />
        <Route path="/studentDashboard" component={StudentDashboard} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  </MuiPickersUtilsProvider>
);

export default App;
