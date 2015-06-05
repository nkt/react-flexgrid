const React = require('react');
const classNames = require('classnames');

const Row = React.createClass({
  propTypes: {
    reverse: React.PropTypes.bool
  },
  render() {
    const className = classNames(this.props.className, 'row', {
      reverse: this.props.reverse
    });

    return (
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Row;
