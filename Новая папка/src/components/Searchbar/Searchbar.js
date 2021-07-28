import React from 'react';
import PropTypes from 'prop-types';

importStylefrom './Searchbar.module.css';

const Searchbar = ({ onSetQuery, searchQuery, onSubmit }) => {
  return (
    <header className={Style.Searchbar}>
      <form onSubmit={onSubmit} className={Style.SearchForm}>
        <button type="submit" className={Style.SearchFormButton}>
          <span className={Style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={Style.SearchFormInput}
          onInput={onSetQuery}
          name="searchQuery"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSetQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,

}
export default Searchbar;
