import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Register, { SidePanel, RegisterForm } from '../pages/Register';

describe('Register', () => {
  describe('<SidePanel />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SidePanel />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <SidePanel />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<RegisterForm />', () => {
    const testData = {
      onRegister: () => {}
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <RegisterForm onRegister={testData.onRegister} />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <RegisterForm onRegister={testData.onRegister} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Register />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <Register />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});