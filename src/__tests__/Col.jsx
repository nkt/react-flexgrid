import React from 'react';
import { shallow } from 'enzyme';

import { Col } from '../';

describe('Col', () => {
  it('Should add classes equals to props', () => {
    const enzymeWrapper = shallow(<Col xs={12} sm={8} md={6} lg={4} first="xs" last="lg" />);

    expect(enzymeWrapper.hasClass('col-xs-12')).toBeTruthy();
    expect(enzymeWrapper.hasClass('col-sm-8')).toBeTruthy();
    expect(enzymeWrapper.hasClass('col-md-6')).toBeTruthy();
    expect(enzymeWrapper.hasClass('col-lg-4')).toBeTruthy();
    expect(enzymeWrapper.hasClass('first-xs')).toBeTruthy();
    expect(enzymeWrapper.hasClass('last-lg')).toBeTruthy();
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const enzymeWrapper = shallow(<Col reverse />);

    expect(enzymeWrapper.hasClass('reverse')).toBeTruthy();
  });

  it('Should not replace class', () => {
    const enzymeWrapper = shallow(<Col className="foo" md={3} />);

    expect(enzymeWrapper.hasClass('foo')).toBeTruthy();
    expect(enzymeWrapper.hasClass('col-md-3')).toBeTruthy();
  });

  it('Should allow zero offset', () => {
    const enzymeWrapper = shallow(<Col xs={11} sm={8} md={6} lg={4} xsOffset={1} smOffset={0} />);

    expect(enzymeWrapper.hasClass('col-xs-11')).toBeTruthy();
    expect(enzymeWrapper.hasClass('col-sm-offset-0')).toBeTruthy();
    expect(enzymeWrapper.hasClass('col-xs-offset-1')).toBeTruthy();
  });
});
