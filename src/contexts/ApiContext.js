import React, { createContext, useState } from 'react';

export const ApiContext = createContext({
  results: [],
  searched: false,
  error: {},
  setResults: () => {},
  setSearched: () => {},
  setError: () => {}
});

export const ApiProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState({});

  const value = {
    results,
    searched,
    error,
    setResults,
    setSearched,
    setError
  };

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}