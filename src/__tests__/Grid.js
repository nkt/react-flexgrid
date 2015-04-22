jest.dontMock('../Grid');

describe('Grid', function () {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;
  const Grid = require('../Grid');

  it('Should add "container" class', function () {
    let grid = TestUtils.renderIntoDocument(<Grid></Grid>);
    expect(grid.getDOMNode().className).toEqual('container');
  });

  it('Should not replace class', function () {
    let grid = TestUtils.renderIntoDocument(<Grid className="foo"></Grid>);
    let className = grid.getDOMNode().className;
    expect(className).toContain('foo');
    expect(className).toContain('container');
  });

  it('Should add "container-fluid" class if "fluid" property is true', function () {
    let grid = TestUtils.renderIntoDocument(<Grid fluid={true}></Grid>);
    expect(grid.getDOMNode().className).toEqual('container-fluid');
  });

  it('Should wrap children nodes', function () {
    // @todo: complete test
    let grid = TestUtils.renderIntoDocument(<Grid><span>test</span></Grid>);
  })
});
