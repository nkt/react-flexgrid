var React = require('react');

var Grid = React.createClass({
    displayName: 'Grid',
    propTypes: {
        fluid: React.PropTypes.bool
    },
    render: function() {
        var className = this.props.fluid ? 'container-fluid' : 'container';

        if (this.props.className) {
            this.props.className = className + ' ' + this.props.className;
        } else {
            this.props.className = className;
        }

        return React.createElement('div', this.props, this.props.children);
    }
});

module.exports = Grid;
