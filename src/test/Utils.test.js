import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Input, Button } from '../components/Utils';


describe('Utils', () => {
  describe('<Input />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <Input 
          required
          name='test'
          id='test'
          placeholder='This is a test'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <Input 
            required
            name='test'
            id='test'
            placeholder='This is a test'
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Button />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Button>Test Button</Button>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <Button>Test Button</Button>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});