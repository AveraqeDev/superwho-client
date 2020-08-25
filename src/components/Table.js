import React, { useContext } from 'react';

import { ApiContext } from '../contexts/ApiContext';

import '../styles/Table.css';

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

const Table = () => {

  const { results, searched, error } = useContext(ApiContext);

  return (
    <div className="Table">
      <TableControls />
      <h1>Data Table goes here</h1>
    </div>
  )
};

export default Table;