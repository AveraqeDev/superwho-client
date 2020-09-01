import React, { useContext, useMemo } from 'react';
import { Input, Button } from '../components/Utils';
import Table from '../components/Table';

import { ApiContext } from '../contexts/ApiContext';
import HeroApiService from '../services/hero-api-service';

import '../styles/Search.css';
import config from '../config';

export const SearchHeader = React.memo(function SearchHeader() {
  const { setResults, searched, setSearched, term, setTerm, setError } = useContext(ApiContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const { search } = e.target;
    setError(null);
    setResults([]);
    setSearched(true);
    setTerm(search.value);
    HeroApiService.searchForHero(search.value)
      .then(res => {
        setResults(res);
      })
      .catch(setError);
  };

  return (
    <div className="SearchHeader">
      <h2>{searched ? `Results for "${term}"` : 'Search   '}</h2>
      <form className="SearchForm" onSubmit={onSubmit}>
        <Input 
          required
          name='search'
          id='SearchForm__term'
          placeholder='Search for a hero'
        />
        <Button className="SearchForm__button" type="submit">
          {'>'}
        </Button>
      </form>
    </div>
  )
});

const Search = () => {
  const { searched, results, error } = useContext(ApiContext);
  const columns = useMemo(() => config.COLUMNS, []);
  return (
    <div className="Search">
      <SearchHeader />
      {!error 
        ? 
          (searched 
            ? <Table columns={columns} data={results} /> 
            : (
              <div className="WelcomeText">
                <h2>Welcome to SuperWho!</h2>
                <p>To get started, type a keyword in the search box above!</p>
              </div>
            )
          ) 
        : <h2>{error.error}</h2>
      }
    </div>
  );
};

export default Search;