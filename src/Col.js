const React = require('react');

const Col = React.createClass({
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
  render() {
    let classes = [];
    let props = this.props;

    if (props.className) {
      classes.push(this.props.className);
    }

    if (props.reverse) {
      classes.push('reverse');
    }

    for (let key in props) {
      if (props.hasOwnProperty(key) && this._classMap[key]) {
        classes.push(this._classMap[key] + props[key]);
      }
    }

    props.className = classes.join(' ');

    return React.createElement('div', props, this.props.children);
  }
});

module.exports = Col;
