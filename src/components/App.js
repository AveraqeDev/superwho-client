import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import api from '../api'
import { useAuthState } from '../hooks/AuthState';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

import NavBar from './NavBar';

import Login from '../pages/Login';
import Register from '../pages/Register';

import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

const App = () => {
  const { key } = useLocation();
  const { authenticated, dispatch } = useAuthState();

  useEffect(() => {
    let isCurrent = true
    if(!authenticated) {
      api.auth.getAuthenticatedUser().then(user => {
        if(user && isCurrent) {
          dispatch({ type: 'LOGIN', user })
        }
      })
    }
    return () => (isCurrent = false)
  }, [authenticated, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
