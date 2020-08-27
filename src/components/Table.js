import React from 'react';

import '../styles/Table.css';

const TableControls = React.memo(function TableConrtols() {
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
});

const Table = ({ data }) => {
  return (
    <div className="Table">
      <TableControls />
      <h1>Data Table goes here</h1>
      <ul>
      {data.map((hero, index) => {
        return (
          <li key={index}>{hero.name}</li>
        );
      })}
      </ul>
    </div>
  )
};

export default Table;