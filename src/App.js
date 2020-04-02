import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
  
      
    </div>
  </Router>
);

export default withAuthentication(App);
