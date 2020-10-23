import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthStateProvider as Auth } from "./hooks/AuthState";
import { FavoriteHeroProvider as Favorite } from "./hooks/FavoriteHeroState";
import App from './components/App';

import './styles/index.css';
import 'fontsource-roboto';

ReactDOM.render(
  <Router>
    <Auth>
      <Favorite>
        <App />
      </Favorite>
    </Auth>
  </Router>,
  document.getElementById('root')
);
