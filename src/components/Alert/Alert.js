import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

// TODO
// Decide between coding our own alerts
// or using react-toastify

const Alert = props => {
  const { className, children, ...rest } = props;

  let alertClasses = classNames(styles.alert, className, {
    [styles.primary]: props.primary,
    [styles.secondary]: props.secondary,
    [styles.success]: props.success,
    [styles.warning]: props.warning,
    [styles.danger]: props.danger
  });

  return (
    <div className={alertClasses} {...rest}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Alert;
