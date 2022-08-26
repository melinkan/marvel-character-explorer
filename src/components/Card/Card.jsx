import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export const Card = ({ char }) => {
  return (
    <div class={styles.card}>
      <div class={styles.content}>
        <div class={styles.front}>
          <div className={styles.cardimg}>
            <img
              className="img-fluid"
              src={char.thumbnail.path + "." + char.thumbnail.extension}
            />
          </div>
          <div className={styles.cardTitle}>
            <p>{char.name}</p>
          </div>
        </div>
        <div class={styles.back}>
          <Link to={`/characters/${char.id}`} className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
