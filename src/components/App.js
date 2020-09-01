import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from './NavBar';

import Login from '../pages/Login';
import Register from '../pages/Register';

import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ErrorBoundary>
          <Switch>
            <PublicRoute
              path='/login'
              component={Login}
            />
            <PublicRoute
              path='/register'
              component={Register}
            />

            <Route
              exact
              path='/'
              component={Search}
            />

            <PrivateRoute 
              path='/favorites'
              component={Favorites}
            />
          </Switch>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
