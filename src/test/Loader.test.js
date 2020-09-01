import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';

describe('<Loader />', () => {
  // Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Loader />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});