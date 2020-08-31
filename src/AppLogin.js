import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import loginPage from './screens/login';
import signupPage from './screens/signup';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={loginPage} />
      <Route path="/login" component={loginPage} />
      <Route path="/signup" component={signupPage} />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);

export default App;
