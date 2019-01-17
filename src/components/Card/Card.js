import React from "react";

import styles from "./styles.module.scss";

const Card = props => {
  const { children } = props;
  return <div className={styles.card}>{children}</div>;
};

export default Card;
