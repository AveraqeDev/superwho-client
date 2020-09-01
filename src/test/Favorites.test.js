import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Favorites, { FavoritesHeader } from '../pages/Favorites';

describe('Favorites', () => {
  describe('<FavoritesHeader />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<FavoritesHeader />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <FavoritesHeader />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Favorites />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Favorites />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <Favorites />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});