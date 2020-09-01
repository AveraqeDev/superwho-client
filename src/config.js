import React from 'react';
import Badge from './components/Badge';
import FavoriteButton from './components/FavoriteButton';

export default {
  API_URL: process.env.REACT_APP_API_URL,
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
  COLUMNS: [
    {
      Header: 'Name',
      accessor: 'name',
      id: 'name',
      defaultCanSort: true
    },
    {
      Header: 'Alignment',
      accessor: 'biography.alignment',
      id: 'alignment',
      defaultCanSort: true
    },
    {
      Header: 'Race',
      accessor: 'appearance.race',
      id: 'race',
      defaultCanSort: true
    },
    {
      Header: 'Gender',
      accessor: 'appearance.gender',
      id: 'gender',
      defaultCanSort: true
    },
    {
      Header: 'Height',
      accessor: 'appearance.height',
      Cell: ({ cell: { value } }) => <Badge values={value} />,
      disableSortBy: true
    },
    {
      Header: 'Weight',
      accessor: 'appearance.weight',
      Cell: ({ cell: { value } }) => <Badge values={value} />,
      disableSortBy: true
    },
    {
      Header: '',
      id: 'actions',
      accessor: 'id',
      Cell: ({ cell: { value } }) => <FavoriteButton heroId={value} />,
      disableSortBy: true
    }
  ]
};