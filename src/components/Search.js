import React from "react";

const Search = props =>
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
      onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="number"
        className="form-control"
        placeholder="Search a Number"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>;

export default Search;
