import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from '../';

describe('Grid', () => {
  it('Should add "container" class', () => {
    const enzymeWrapper = shallow(<Grid />);

    expect(enzymeWrapper.hasClass('container')).toBeTruthy();
  });

  it('Should not replace class', () => {
    const enzymeWrapper = shallow(<Grid className="foo" />);

    expect(enzymeWrapper.hasClass('foo')).toBeTruthy();
    expect(enzymeWrapper.hasClass('container')).toBeTruthy();
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const enzymeWrapper = shallow(<Grid fluid />);

    expect(enzymeWrapper.hasClass('container-fluid')).toBeTruthy();
  });
});
