import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import marvelLogo from "../../assets/marvel-logo.svg";
import searchIcon from "../../assets/search.svg";
import { SearchContext } from "../../contexts";
import styles from "./Header.module.scss";

export function Header() {
  const { setSearchQuery } = useContext(SearchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };

  return (
    <header className={styles.base}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <img src={marvelLogo} alt="logo" />
        </Link>

        <form onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <input
              name="search"
              className={styles.input}
              type="text"
              placeholder="Search"
            />
            <button className={styles.button}>
              <img src={searchIcon} alt="search" width={20} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
