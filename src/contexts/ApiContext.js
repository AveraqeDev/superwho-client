import React, { createContext, useState, useMemo } from 'react';
import Badge from '../components/Badge';

export const ApiContext = createContext({
  results: [],
  columns: [],
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

  const columns = useMemo(
    () => [
        {
          Header: 'Name',
          accessor: 'name'
        },
        {
          Header: 'Alignment',
          accessor: 'biography.alignment'
        },
        {
          Header: 'Race',
          accessor: 'appearance.race'
        },
        {
          Header: 'Gender',
          accessor: 'appearance.gender'
        },
        {
          Header: 'Height',
          accessor: 'appearance.height'
        },
        {
          Header: 'Weight',
          accessor: 'appearance.weight'
        },
        // {
        //   Header: 'Affiliations',
        //   accessor: 'connections.group-affiliation',
        //   Cell: ({ cell: { value } }) => <Badge values={value} />,
        // }
    ], []);

  const value = {
    results,
    columns,
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