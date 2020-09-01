import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search, { SearchHeader } from '../pages/Search';

describe('Search', () => {
  describe('<SearchHeader />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SearchHeader />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <SearchHeader />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Search />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Search />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <Search />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});