const React = require('react');

const Row = React.createClass({
  displayName: 'Row',
  propTypes: {
    reverse: React.PropTypes.bool
  },
  render() {
    let className = 'row';
    if (this.props.reverse) {
      className += ' reverse';
    }

    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return React.createElement('div', Object.assign(this.props, {className}), this.props.children);
  }
});

module.exports = Row;
