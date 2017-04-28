import React from 'react';
import { shallow } from 'enzyme';

import { Row } from '../';

describe('Row', () => {
  it('Should add "row" class', () => {
    const enzymeWrapper = shallow(<Row />);

    expect(enzymeWrapper.hasClass('row')).toBeTruthy();
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const enzymeWrapper = shallow(<Row reverse />);

    expect(enzymeWrapper.hasClass('reverse')).toBeTruthy();
  });

  it('Should not replace class', () => {
    const enzymeWrapper = shallow(<Row className="foo" />);

    expect(enzymeWrapper.hasClass('foo')).toBeTruthy();
    expect(enzymeWrapper.hasClass('row')).toBeTruthy();
  });

  it('Should add modificators', () => {
    const enzymeWrapper = shallow(
      <Row
        start="xs"
        center="sm"
        end="md"
        top="lg"
        middle="xs"
        bottom="sm"
        around="md"
        between="lg"
      />);

    expect(enzymeWrapper.hasClass('row')).toBeTruthy();
    expect(enzymeWrapper.hasClass('start-xs')).toBeTruthy();
    expect(enzymeWrapper.hasClass('center-sm')).toBeTruthy();
    expect(enzymeWrapper.hasClass('end-md')).toBeTruthy();
    expect(enzymeWrapper.hasClass('top-lg')).toBeTruthy();
    expect(enzymeWrapper.hasClass('middle-xs')).toBeTruthy();
    expect(enzymeWrapper.hasClass('bottom-sm')).toBeTruthy();
    expect(enzymeWrapper.hasClass('around-md')).toBeTruthy();
    expect(enzymeWrapper.hasClass('between-lg')).toBeTruthy();
  });
});
