import React, { Component } from "react";
import fetchPixaBay from "../services/fetchPixaBay";

const Searchbar = ({ options, ononHandleChange, onSubmit }) => {
  const { searchQuary } = options;
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="searchQuary"
          value={searchQuary}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={ononHandleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
