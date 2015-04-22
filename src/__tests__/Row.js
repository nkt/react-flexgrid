jest.dontMock('../Row');

describe('Row', function () {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;
  const Row = require('../Row');

  it('Should add "row" class', function () {
    let row = TestUtils.renderIntoDocument(<Row></Row>);
    expect(row.getDOMNode().className).toEqual('row');
  });

  it('Should add "reverse" class if "reverse" property is true', function () {
    let row = TestUtils.renderIntoDocument(<Row reverse={true}></Row>);
    expect(row.getDOMNode().className).toContain('reverse');
  });

  it('Should not replace class', function () {
    let row = TestUtils.renderIntoDocument(<Row className="foo"></Row>);
    let className = row.getDOMNode().className;
    expect(className).toContain('foo');
    expect(className).toContain('row');
  });
});
