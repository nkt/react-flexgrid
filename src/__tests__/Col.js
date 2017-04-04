jest.dontMock('../Col');

describe('Col', () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const TestUtils = require('react-dom/lib/ReactTestUtils');
  const Col = require('../Col');

  it('Should add classes equals to props', () => {
    const col = TestUtils.renderIntoDocument(<Col xs={12} sm={8} md={6} lg={4} first="xs" last="lg"/>);
    const className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain('col-xs-12');
    expect(className).toContain('col-sm-8');
    expect(className).toContain('col-md-6');
    expect(className).toContain('col-lg-4');
    expect(className).toContain('first-xs');
    expect(className).toContain('last-lg');
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const col = TestUtils.renderIntoDocument(<Col reverse={true} />);
    expect(ReactDOM.findDOMNode(col).className).toContain('reverse');
  });

  it('Should not replace class', () => {
    const col = TestUtils.renderIntoDocument(<Col className="foo" md={3} />);
    const className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain('foo');
    expect(className).toContain('col-md-3');
  });

  it('Should allow zero offset', () => {
    const col = TestUtils.renderIntoDocument(<Col xs={11} sm={8} md={6} lg={4} xsOffset={1} smOffset={0}/>);
    const className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain('col-xs-11');
    expect(className).toContain('col-sm-offset-0');
    expect(className).toContain('col-xs-offset-1');
  });
});
