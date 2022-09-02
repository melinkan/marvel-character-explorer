import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export const Card = ({ char }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.front}>
          <div className={styles.cardimg}>
            <img src={char.thumbnail.path + "." + char.thumbnail.extension} />
          </div>
          <div className={styles.cardTitle}>
            <p>{char.name}</p>
          </div>
        </div>
        <div className={styles.back}>
          <Link to={`/characters/${char.id}`} className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
