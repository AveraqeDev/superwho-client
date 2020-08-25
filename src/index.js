import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import './styles/index.css';
import { UserProvider } from './contexts/UserContext';
import { ApiProvider } from './contexts/ApiContext';

ReactDOM.render(
  <Router>
    <UserProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
);
