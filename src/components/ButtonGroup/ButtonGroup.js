import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const ButtonGroup = props => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={
        className
          ? `${styles.buttonGroup} ${className}`
          : `${styles.buttonGroup}`
      }
      {...rest}
    >
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired
};

export default ButtonGroup;
