import React, { useMemo } from 'react';
import { Input, Button } from '../components/Utils';
import Table from '../components/Table';

import '../styles/Search.css';
import config from '../config';

export const SearchHeader = React.memo(function SearchHeader() {

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SearchHeader">
      <h2>Search</h2>
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
  const columns = useMemo(() => config.COLUMNS, []);
  return (
    <div className="Search">
      <SearchHeader />
      <Table columns={columns} data={[]} /> 
    </div>
  );
};

export default Search;