import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Button = props => {
  const { next, prev, children, className, ...rest } = props;

  return (
    <button
      className={
        className ? `${styles.button} ${className}` : `${styles.button}`
      }
      {...rest}
    >
      {prev ? "Previous" : ""}
      {next ? "Next" : ""}
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  next: PropTypes.bool,
  prev: PropTypes.bool
};

export default Button;
