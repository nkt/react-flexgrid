import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const Row = ({ reverse, className, children, ...other }) => {
  const modificators = ['row'];
  const passingProps = {};
  Object.keys(other).forEach(key => {
    if (modificatorKeys.includes(key)) {
      const value = other[key];
      if (value) {
        modificators.push(`${key}-${value}`);
      }
    } else {
      passingProps[key] = other[key];
    }
  });

  if (reverse) {
    modificators.push('reverse');
  }

  const _className = classNames(className, modificators);

  return (
    <div {...passingProps} className={_className}>
      {children}
    </div>
  );
};

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType
};

export default Row;
