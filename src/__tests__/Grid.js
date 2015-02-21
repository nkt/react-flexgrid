jest.dontMock('../Grid');

describe('Grid', function () {
    it('Should add container class to element', function () {
        var React = require('react/addons');
        var Grid = require('../Grid');
        var TestUtils = React.addons.TestUtils;

        var grid = TestUtils.renderIntoDocument(<Grid></Grid>);
        assert.equals('container', grid.getDOMNode().className);
    });
});
