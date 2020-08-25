import React from 'react';
import { Input, Button } from '../components/Utils';

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

const TableControls = () => {
  return (
    <div className="TableControls">
      <p>Showing 10 of 113</p>
      <div className="PageButtons">
        <button className="TableControls__button prev">
          {'< Prev'}
        </button>
        <button className="TableControls__button next">
          {'Next >'}
        </button>
      </div>
    </div>
  );
};

const Search = () => {

  const onSubmit = e => {

  };

  return (
    <div className="Search">
      <SearchHeader onSubmit={onSubmit} />
      <TableControls />
    </div>
  );
};

export default Search;