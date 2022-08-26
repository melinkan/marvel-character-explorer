import React from "react";
import spinner from "../../assets/spinner.svg";
import styles from "./Spinner.module.scss";

export function Spinner({ size = "md" }) {
  return (
    <div>
      <img className={styles[size]} src={spinner} alt="spinner" />
    </div>
  );
}
