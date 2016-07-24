const React = require('react');
const classNames = require('classnames');

const ModificatorType = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

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
    first: ModificatorType,
    last: ModificatorType
  },
  render() {
    const modificators = ['row'];
    for (let i = 0; i < modificatorKeys.length; ++i) {
      const key = modificatorKeys[i];
      const value = this.props[key];
      if (value) {
        modificators.push(`${key}-${value}`);
      }
    }

    if (this.props.reverse) {
      modificators.push('reverse');
    }

    const className = classNames(this.props.className, modificators);

    let passingProps = {};
    for (let key in this.props) {
      if (!this.props.hasOwnProperty(key) || !this.propTypes[key]) {
        passingProps[key] = this.props[key]
      }
    }

    return (
      <div {...passingProps} className={className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Row;
