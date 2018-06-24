import React from "react";
import whoIs_white from '../images/whoIs_white.svg';

const Search = props =>
  <div className="searchArea">
  <form className="input-group-lg">
      <label htmlFor="search">
        <img id="whoisLogo" src={whoIs_white} className="whoIs" alt="Search"/>
      </label>
      <input
      onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="tel"
        className="form-control"
        placeholder="Search..."
        required
        id="search"
        minLength="10"
        maxLength="12"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-default">
        Search
      </button>
      <span className="validity"></span>
  </form>
  <small id="emailHelp" className="form-text text-muted">Search a Number; e.g. 1231231234</small>

</div>

export default Search;
