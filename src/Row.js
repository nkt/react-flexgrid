var React = require('react');

var Row = React.createClass({
    displayName: 'Row',
    propTypes: {
        reverse: React.PropTypes.bool
    },
    render: function() {
        var className = 'row ';
        if (this.props.reverse) {
            className += 'reverse ';
        }

        if (this.props.className) {
            this.props.className = className + this.props.className;
        } else {
            this.props.className = className;
        }

        return React.createElement('div', this.props, this.props.children);
    }
});

module.exports = Row;
