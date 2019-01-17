import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Card = props => {
  const { children } = props;
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Card;
