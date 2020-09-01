import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar, { Branding, Burger, Menu, UserAccount, UserAccountMenu, Sidebar } from '../components/NavBar';


describe('NavBar', () => {
  describe('<Branding />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <Branding />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <Branding />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Burger />', () => {
    const testData = {
      open: false,
      setOpen: () => {}
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Burger open={testData.open} setOpen={testData.setOpen} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <Burger open={testData.open} setOpen={testData.setOpen} />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Menu />', () => {
    const testData = {
      open: false,
      setOpen: () => {},
      onLogout: () => {},
      location: ''
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <Menu open={testData.open} setOpen={testData.setOpen} onLogout={testData.onLogout} location={testData.location} />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <Menu open={testData.open} setOpen={testData.setOpen} onLogout={testData.onLogout} location={testData.location} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<UserAccount />', () => {
    const testData = {
      open: false,
      setOpen: () => {}
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <UserAccount open={testData.open} setOpen={testData.setOpen} />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <UserAccount open={testData.open} setOpen={testData.setOpen} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<UserAccountMenu />', () => {
    const testData = {
      open: false,
      setOpen: () => {},
      onLogout: () => {}
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <UserAccountMenu open={testData.open} setOpen={testData.setOpen} onLogout={testData.onLogout} />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <UserAccountMenu open={testData.open} setOpen={testData.setOpen} onLogout={testData.onLogout} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Sidebar />', () => {
    const testData = {
      location: {
        pathname: ''
      }
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <Sidebar location={testData.location} />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <Sidebar location={testData.location} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<NavBar />', () => {
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <NavBar />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});