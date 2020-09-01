import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Badge from '../components/Badge';

describe('<Badge />', () => {
  const testData = [
    'Test1',
    'Test2',
    'Test3',
    'Test4',
    'Test5'
  ];

  // Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Badge values={testData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Badge values={testData} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});