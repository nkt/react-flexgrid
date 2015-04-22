const React = require('react');

const Grid = React.createClass({
  displayName: 'Grid',
  propTypes: {
    fluid: React.PropTypes.bool
  },
  render() {
    let className = this.props.fluid ? 'container-fluid' : 'container';

    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return React.createElement('div', Object.assign({}, this.props, {className}), this.props.children);
  }
});

module.exports = Grid;
