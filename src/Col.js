var React = require('react');

var Col = React.createClass({
    displayName: 'Col',
    propTypes: {
        reverse: React.PropTypes.bool,
        xs: React.PropTypes.number,
        sm: React.PropTypes.number,
        md: React.PropTypes.number,
        lg: React.PropTypes.number,
        xsOffset: React.PropTypes.number,
        smOffset: React.PropTypes.number,
        mdOffset: React.PropTypes.number,
        lgOffset: React.PropTypes.number
    },
    _classMap: {
        xs: 'col-xs-',
        sm: 'col-sm-',
        md: 'col-md-',
        lg: 'col-lg-',
        xsOffset: 'col-xs-offset-',
        smOffset: 'col-sm-offset-',
        mdOffset: 'col-md-offset-',
        lgOffset: 'col-lg-offset-'
    },
    render: function() {
        var classes = [];

        if (this.props.className) {
            classes.push(this.props.className);
        }

        if (this.props.reverse) {
            classes.push('reverse');
        }

        for (var key in this.props) {
            if (this.props.hasOwnProperty(key) && this._classMap[key]) {
                classes.push(this._classMap[key] + this.props[key]);
            }
        }

        this.props.className = classes.join(' ');

        return React.createElement('div', this.props, this.props.children);
    }
});

module.exports = Col;
