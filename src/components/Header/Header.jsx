import React from "react";
import marvelLogo from "../../assets/marvel-logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.base}>
      <div className={`container ${styles.container}`}>
        <img src={marvelLogo} alt="logo" />

        <form action="">
          <input type="text" />
        </form>
      </div>
    </header>
  );
}
