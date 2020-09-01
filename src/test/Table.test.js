import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import config from '../config';
import Table, { TableControls } from '../components/Table';

describe('Table', () => {
  describe('<TableControls />', () => {
    const testData = {
      pageCount: 3,
      page: 2,
      canPrevious: true,
      onPrev: () => {},
      canNext: true,
      onNext: () => {}
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <TableControls 
          pageCount={testData.pageCount}
          page={testData.page}
          canPrevious={testData.canPrevious}
          onPrev={testData.onPrev}
          canNext={testData.canNext}
          onNext={testData.onNext}
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <TableControls 
            pageCount={testData.pageCount}
            page={testData.page}
            canPrevious={testData.canPrevious}
            onPrev={testData.onPrev}
            canNext={testData.canNext}
            onNext={testData.onNext}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('<Table />', () => {
    const testData = {
      columns: config.COLUMNS,
      data: [
        {
          id: 1,
          name: 'A-Bomb',
          biography: {
            alignment: 'good'
          },
          appearance: {
            race: 'Human',
            gender: 'Male',
            height: [
              "6'8",
              '203 cm'
            ],
            weight: [
              '980 lb',
              '441 kg'
            ]
          }
        },
        {
          id: 2,
          name: 'Abe Sapien',
          biography: {
            alignment: 'good'
          },
          appearance: {
            race: 'Icthyo Sapien',
            gender: 'Male',
            height: [
              "6'3",
              '191 cm'
            ],
            weight: [
              '145 lb',
              '65 kg'
            ]
          }
        }
      ]
    };
    // Smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <Table columns={testData.columns} data={testData.data} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    //Snapshot test
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(
          <Table columns={testData.columns} data={testData.data} />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  });
});