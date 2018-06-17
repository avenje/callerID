import React from "react";
import whoIs_white from '../images/whoIs_white.svg';

const Search = props =>
  <form>
    <div className="form-group">
      <label htmlFor="search">
        <img src={whoIs_white} className="whoIs" alt="Search"/>
      </label>
      <input
      onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="number"
        className="form-control"
        placeholder="Search a Number; e.g. 1231231234"
        id="search"
      />
     
      <button onClick={props.handleFormSubmit} className="btn btn-default">
        Search
      </button>
    </div>
  </form>;

export default Search;
