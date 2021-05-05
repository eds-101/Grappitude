import React from 'react';
import renderer from 'react-test-renderer';

import { dateFormatter } from './functions/date-formatter';
import App from './App';

// describe('<App />', () => {
//   it('has 5 children', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree.children.length).toBe(1);
//   });

//   it('renders correctly', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot();
//   }); 
// });


describe('Functions', () => {
  it('formats timestamp into human readable output', () => {
    expect(dateFormatter("2021-05-05T11:43:59.750Z")).toEqual("Wed May 05 2021 12:43");
  });


});



