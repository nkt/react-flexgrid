const React = require('react');
const classNames = require('classnames');

const Grid = React.createClass({
  propTypes: {
    fluid: React.PropTypes.bool
  },
  render() {
    const containerClass = this.props.fluid ? 'container-fluid' : 'container';
    const className = classNames(this.props.className, containerClass);

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

module.exports = Grid;
