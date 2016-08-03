const React = require('react');
const classNames = require('classnames');

const Grid = React.createClass({
  propTypes: {
    fluid: React.PropTypes.bool
  },
  render() {
    const { fluid, className, ...other} = this.props;
    const containerClass = fluid ? 'container-fluid' : 'container';
    const _className = classNames(className, containerClass);

    return (
      <div {...other} className={_className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Grid;
