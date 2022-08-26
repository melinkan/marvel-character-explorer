import React from "react";
import styles from "./CharList.module.scss";

export const CharList = ({ children }) => {
  return (
    <main className={`fixed-top ${styles.base}`}>
      <div className={`container ${styles.container}`}>{children}</div>
    </main>
  );
};
