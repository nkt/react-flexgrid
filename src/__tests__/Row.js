jest.dontMock('../Row');

describe('Row', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Row = require('../Row');

    it('Should add "row" class', function () {
        var row = TestUtils.renderIntoDocument(<Row></Row>);
        expect(row.getDOMNode().className).toEqual('row');
    });

    it('Should add "reverse" class if "reverse" property is true', function () {
        var row = TestUtils.renderIntoDocument(<Row reverse={true}></Row>);
        expect(row.getDOMNode().className).toContain('reverse');
    });

    it('Should not replace class', function () {
        var row = TestUtils.renderIntoDocument(<Row className="foo"></Row>);
        var className = row.getDOMNode().className;
        expect(className).toContain('foo');
        expect(className).toContain('row');
    });
});
