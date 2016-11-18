const React = require('react');
const classNames = require('classnames');

const ModificatorType = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const Row = React.createClass({
  propTypes: {
    reverse: React.PropTypes.bool,
    start: ModificatorType,
    center: ModificatorType,
    end: ModificatorType,
    top: ModificatorType,
    middle: ModificatorType,
    bottom: ModificatorType,
    around: ModificatorType,
    between: ModificatorType,
  },
  render() {
    const { reverse, className, children, ...other} = this.props;

    const modificators = ['row'];
    let passingProps = {};
    for (let key in other) {
      if (modificatorKeys.indexOf(key) > -1) {
        const value = other[key];
        if (value) {
          modificators.push(`${key}-${value}`);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    if (reverse) {
      modificators.push('reverse');
    }

    const _className = classNames(className, modificators);

    return (
      <div {...passingProps} className={_className}>
        {children}
      </div>
    );
  }
});

module.exports = Row;
