import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from './NavBar';

import Login from '../pages/Login';
import Register from '../pages/Register';

import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import Hero from '../pages/Hero';

function App() {
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

            <PrivateRoute
              exact
              path='/'
              component={Search}
            />
            <PrivateRoute 
              path='/favorites'
              component={Favorites}
            />
            <PrivateRoute 
              path='/profile'
              component={Profile}
            />
            <PrivateRoute 
              path='/superhero/:heroId'
              component={Hero}
            />

          </Switch>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
