import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FavoriteButton from '../components/FavoriteButton';

describe('<FavoriteButton />', () => {
  const testData = 1;

  // Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FavoriteButton heroId={testData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <FavoriteButton heroId={testData} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});