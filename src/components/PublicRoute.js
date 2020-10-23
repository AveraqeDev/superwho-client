import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from "../hooks/AuthState";

const PublicRoute = ({ children, ...props }) => {
  const { authenticated } = useAuthState()

  return (
    <Route 
      {...props}
    >
      {authenticated ? (
        <Redirect to='/' />
      ) : (
        {children}
      )}
    </Route>
  );
};

export default PublicRoute