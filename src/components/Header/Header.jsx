import React from "react";
import { Link } from "react-router-dom";
import marvelLogo from "../../assets/marvel-logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.base}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <img src={marvelLogo} alt="logo" />
        </Link>

        <form action="">
          <input type="text" />
        </form>
      </div>
    </header>
  );
}
