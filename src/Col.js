import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const classMap = {
  xs: 'col-xs-',
  sm: 'col-sm-',
  md: 'col-md-',
  lg: 'col-lg-',
  xsOffset: 'col-xs-offset-',
  smOffset: 'col-sm-offset-',
  mdOffset: 'col-md-offset-',
  lgOffset: 'col-lg-offset-',
  first: 'first-',
  last: 'last-',
};

const Col = ({ children, reverse, className, ...other }) => {
  const classes = [];

  if (className) {
    classes.push(className);
  }

  if (reverse) {
    classes.push('reverse');
  }

  const passingProps = {};
  Object.keys(other).forEach((key) => {
    if (classMap[key]) {
      const value = other[key];
      if (typeof value !== 'undefined') {
        classes.push(`${classMap[key]}${value}`);
      }
    } else {
      passingProps[key] = other[key];
    }
  });

  return createElement('div', Object.assign({}, passingProps, {
    className: classes.join(' '),
  }), children);
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  reverse: PropTypes.bool,
  first: PropTypes.string,
  last: PropTypes.string,
};

export default Col;
