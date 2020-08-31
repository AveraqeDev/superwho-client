import React from 'react';
import { useTable, usePagination } from 'react-table';

import '../styles/Table.css';

const TableControls = ({ pageCount, page, canPrevious, onPrev, canNext, onNext }) => {
  return (
    <div className="TableControls">
      <p>Page {page + 1} of {pageCount}</p>
      <div className="PageButtons">
        <button className="TableControls__button prev" onClick={onPrev} disabled={!canPrevious}>
          {'< Prev'}
        </button>
        <button className="TableControls__button next" onClick={onNext} disabled={!canNext}>
          {'Next >'}
        </button>
      </div>
    </div>
  );
};

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 }
    },
    usePagination
  );

  return (
    <>
    <TableControls pageCount={pageCount} page={pageIndex} canPrevious={canPreviousPage} onPrev={previousPage} canNext={canNextPage} onNext={nextPage} />
    <div className="Table">
      <table className="Table__table" {...getTableProps()}>
        <thead className="Table__thead">
          {headerGroups.map(headerGroup => (
            <tr className="Table__tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="Table__th" {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="Table__tbody" {...getTableBodyProps()}>
          {page.map((row) => {
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
    </>
  )
};

export default Table;