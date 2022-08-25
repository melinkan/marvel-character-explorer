import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ char }) => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.cardimg}>
        <img src={char.thumbnail.path + "." + char.thumbnail.extension} />
      </div>
      <div className={styles.cardtitle}>
        <p>{char.name}</p>
      </div>
    </div>
  );
};
