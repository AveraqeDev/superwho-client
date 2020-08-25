import React from 'react';
import { Input, Button } from '../components/Utils';
import Table from '../components/Table';

import '../styles/Search.css';

const SearchHeader = ({ onSubmit }) => {
  return (
    <div className="SearchHeader">
      <h2>Results</h2>
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
};

const Search = () => {

  const onSubmit = e => {

  };

  return (
    <div className="Search">
      <SearchHeader onSubmit={onSubmit} />
      <Table />
    </div>
  );
};

export default Search;