import React from 'react';
import "../styles/SearchBox.css";



function SearchBox({ handleSearchChange }) {
    return (
      <div className="searchbox">
        <form className="form-inline">
         {/* this will be the input box for the searchbox */}
         <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        </form>
      </div>
    );
  }
  export default SearchBox;
  