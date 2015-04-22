const React = require('react');

const Grid = React.createClass({
  displayName: 'Grid',
  propTypes: {
    fluid: React.PropTypes.bool
  },
  render() {
    let props = this.props;
    let className = this.props.fluid ? 'container-fluid' : 'container';

    if (this.props.className) {
      className += ` ${this.props.className}`;
    }
    props.className = className;

    return React.createElement('div', props, this.props.children);
  }
});

module.exports = Grid;
