import React from 'react';
import Badge from './components/Badge';
import FavoriteButton from './components/FavoriteButton';

export default {
  API_URL: process.env.REACT_APP_API_URL,
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
  COLUMNS: [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Alignment',
      accessor: 'biography.alignment'
    },
    {
      Header: 'Race',
      accessor: 'appearance.race'
    },
    {
      Header: 'Gender',
      accessor: 'appearance.gender'
    },
    {
      Header: 'Height',
      accessor: 'appearance.height',
      Cell: ({ cell: { value } }) => <Badge values={value} />
    },
    {
      Header: 'Weight',
      accessor: 'appearance.weight',
      Cell: ({ cell: { value } }) => <Badge values={value} />
    },
    {
      Header: '',
      id: 'actions',
      accessor: 'id',
      Cell: ({ cell: { value } }) => <FavoriteButton heroId={value} />
    }
  ]
};