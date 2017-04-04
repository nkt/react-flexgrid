const React = require('react');

const classMap = {
  xs: 'col-xs-',
  sm: 'col-sm-',
  md: 'col-md-',
  lg: 'col-lg-',
  xsOffset: 'col-xs-offset-',
  smOffset: 'col-sm-offset-',
  mdOffset: 'col-md-offset-',
  lgOffset: 'col-lg-offset-',
  first: 'first-',
  last: 'last-'
};

const Col = React.createClass({
  propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    reverse: React.PropTypes.bool,
    first: React.PropTypes.string,
    last: React.PropTypes.string
  },
  render() {
    const { reverse, className, ...other} = this.props;
    let classes = [];

    if (className) {
      classes.push(className);
    }

    if (reverse) {
      classes.push('reverse');
    }

    let passingProps = {};
    for (let key in other) {
      if (classMap[key]) {
        const value = other[key];
        if (typeof value !== 'undefined') {
          classes.push(`${classMap[key]}${value}`);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    return React.createElement('div', Object.assign({}, passingProps, {
      className: classes.join(' ')
    }), this.props.children);
  }
});

module.exports = Col;
