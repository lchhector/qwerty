import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

// import AppDashboard from './AppDashboard';
// ReactDOM.render(<AppDashboard />, document.getElementById('root'));

// import Signup from './screens/signup';
// ReactDOM.render(<Signup />, document.getElementById('root'));

// import Login from './screens/login';
// ReactDOM.render(<Login />, document.getElementById('root'));

import AppLogin from './AppLogin';

const store = createStore(
  allReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// console.log(store.getState(), 'STATE');

ReactDOM.render(
  <Provider store={store}>
    <AppLogin />
  </Provider>,
  document.getElementById('root'),
);

// const TestBuildApp = () => (
//   <div>Does this build correctly?</div>
// );
// ReactDOM.render(<TestBuildApp />, document.getElementById('root'));
