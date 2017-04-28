import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({ children, fluid, className, ...other }) => {
  const containerClass = fluid ? 'container-fluid' : 'container';
  const _className = classNames(className, containerClass);

  return (
    <div {...other} className={_className}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

export default Grid;
