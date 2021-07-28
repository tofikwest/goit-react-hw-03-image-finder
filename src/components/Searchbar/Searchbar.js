import React from "react";
import PropTypes from "prop-types";

import ButtonIcon from "../ButtonIcon";
import { HiOutlineSearch } from "react-icons/hi";

import styles from "./Searchbar.module.scss";

const Searchbar = ({ handleSubmit, onHandleChange, searchQuery }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <ButtonIcon type="submit" aria-label="Search images">
          <HiOutlineSearch />
        </ButtonIcon>

        <input
          className={styles.SearchFormInput}
          type="text"
          value={searchQuery}
          onChange={onHandleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Searchbar;
