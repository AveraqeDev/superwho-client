import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from "../hooks/AuthState";

const PrivateRoute = ({ children, ...props }) => {
  const { authenticated } = useAuthState()
  return (
    <Route 
      {...props}
    >
      {authenticated ? (
        {children}
      ) : (
        <Redirect
          to='/login'
        />
      )}
    </Route>
  );
};

export default PrivateRoute;