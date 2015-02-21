jest.dontMock('../Col');

describe('Col', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Col = require('../Col');

    it('Should add classes equals to props', function () {
        var grid = TestUtils.renderIntoDocument(<Col xs={12} sm={8} md={6} lg={4}></Col>);
        var className = grid.getDOMNode().className;
        expect(className).toContain('col-xs-12');
        expect(className).toContain('col-sm-8');
        expect(className).toContain('col-md-6');
        expect(className).toContain('col-lg-4');
    });

    it('Should not replace class', function () {
        var grid = TestUtils.renderIntoDocument(<Col className="foo" md={3}></Col>);
        var className = grid.getDOMNode().className;
        expect(className).toContain('foo');
        expect(className).toContain('col-md-3');
    });
});
