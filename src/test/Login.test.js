import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login, { SidePanel, LoginForm } from '../pages/Login';

describe('Login', () => {
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

  describe('<LoginForm />', () => {
    const testData = {
      onLogin: () => {}
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <LoginForm onLogin={testData.onLogin} />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <LoginForm onLogin={testData.onLogin} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Login />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});