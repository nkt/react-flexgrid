jest.dontMock('../Grid');

describe('Grid', () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const TestUtils = require('react/lib/ReactTestUtils');
  const Grid = require('../Grid');

  it('Should add "container" class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid />);
    expect(ReactDOM.findDOMNode(grid).className).toEqual('container');
  });

  it('Should not replace class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid className="foo" />);
    const className = ReactDOM.findDOMNode(grid).className;
    expect(className).toContain('foo');
    expect(className).toContain('container');
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const grid = TestUtils.renderIntoDocument(<Grid fluid />);
    expect(ReactDOM.findDOMNode(grid).className).toEqual('container-fluid');
  });
});
