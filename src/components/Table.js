import React from 'react';
import { useTable, useSortBy } from 'react-table';

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

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <div className="Table">
      <TableControls />
      <table className="Table__table" {...getTableProps()}>
        <thead className="Table__thead">
          {headerGroups.map(headerGroup => (
            <tr className="Table__tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="Table__th" {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="Table__tbody" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="Table__tr" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td className="Table__td" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Table;