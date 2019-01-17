import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Well = props => {
  const { children } = props;
  return <div className={styles.well}>{children}</div>;
};

Well.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Well;
