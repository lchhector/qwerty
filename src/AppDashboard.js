import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken, removeUser } from './actions';
import Overview from './screens/overview';
import Postings from './screens/postings';
import Candidates from './screens/candidates';
import Review from './screens/review';
import matchubLogo from './assets/matchub_blackwords_lowres.png';
import dummyProfilePicture from './assets/dummy-profile-pic.jpg';
import './AppDashboard.scss';

const company = {
  picture: dummyProfilePicture,
  username: 'Angelica',
  role: 'HR manager',
  companyName: 'Company X',
};

const AppDashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <div className="mh-company-dashboard">
        <section className="mh-company-dashboard__navbar">
          <div className="mh-company-dashboard__navbar__top">
            <img src={matchubLogo} alt="MatcHub.co" />
            <nav className="mh-company-dashboard__navbar__top__links">
              <NavLink to="/overview" className="nav-option" activeClassName="nav-option__active">Overview</NavLink>
              <NavLink to="/postings" className="nav-option" activeClassName="nav-option__active">Job Postings</NavLink>
              <NavLink to="/candidates" className="nav-option" activeClassName="nav-option__active">Candidates</NavLink>
              <NavLink to="/review" className="nav-option" activeClassName="nav-option__active">Review</NavLink>
            </nav>
          </div>

          <section className="mh-company-dashboard__navbar__profile">
            <button
              type="button"
              onClick={() => {
                dispatch(removeToken());
                dispatch(removeUser());
                history.push('/login');
              }}
            >
              Logout
            </button>
            <img src={company.picture} alt="profile pic" />
            <div className="username">{user.first_name}</div>
            <div>{company.role}</div>
            <div>{company.companyName}</div>
          </section>
        </section>

        <section className="mh-company-dashboard__body">
          <Switch>
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/">
              <Redirect to="/postings" />
            </Route>
            <Route path="/overview" component={Overview} />
            <Route path="/postings" component={Postings} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/review" component={Review} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default AppDashboard;
