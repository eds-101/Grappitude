import React from 'react';
import renderer from 'react-test-renderer';

import { dateFormatter } from './functions/date-formatter';
import AppContainer from './components/app-container.component';

describe('<AppContainer />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<AppContainer />).toJSON();
    expect(tree.children.length).toBe(3);
  });

});

describe('Functions', () => {

  describe('Date Formatter', () => {
    it('formats timestamps into human readable output', () => {
      expect(dateFormatter("2021-05-05T11:43:59.750Z")).toEqual("Wed May 05 2021 12:43");
    });
  })

});



