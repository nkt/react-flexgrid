const React = require('react');

const Row = React.createClass({
  displayName: 'Row',
  propTypes: {
    reverse: React.PropTypes.bool
  },
  render() {
    let props = this.props;
    let className = 'row';
    if (props.reverse) {
      className += ' reverse';
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    props.className = className;

    return React.createElement('div', props, this.props.children);
  }
});

module.exports = Row;
