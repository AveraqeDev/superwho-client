import React, { useContext } from 'react';
import { Input, Button } from '../components/Utils';
import Table from '../components/Table';

import { ApiContext } from '../contexts/ApiContext';
import HeroApiService from '../services/hero-api-service';

import '../styles/Search.css';

const SearchHeader = React.memo(function SearchHeader() {
  const { setResults, searched, setSearched, term, setTerm, setError } = useContext(ApiContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const { search } = e.target;
    setError(null);
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
      <h2>Results{searched ? ` for "${term}"` : ''}</h2>
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
  const { results } = useContext(ApiContext);
  return (
    <div className="Search">
      <SearchHeader />
      <Table data={results} />
    </div>
  );
};

export default Search;