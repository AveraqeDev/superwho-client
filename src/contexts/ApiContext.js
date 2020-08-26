import React, { createContext, useState } from 'react';

export const ApiContext = createContext({
  results: [],
  searched: false,
  term: '',
  error: {},
  setResults: () => {},
  setSearched: () => {},
  setTerm: () => {},
  setError: () => {}
});

export const ApiProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [term, setTerm] = useState('');
  const [error, setError] = useState({});

  const value = {
    results,
    searched,
    term,
    error,
    setResults,
    setSearched,
    setTerm,
    setError
  };

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}