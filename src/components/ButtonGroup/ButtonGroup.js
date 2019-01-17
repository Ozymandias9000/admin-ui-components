import React from "react";

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

export default ButtonGroup;
