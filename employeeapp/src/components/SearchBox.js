function SearchBox({ handleSearchChange }) {
    return (
      <div className="searchbox">
        <form className="form-inline">
         {/* this will be the input box for the searchbox */}
         <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        </form>
      </div>
    );
  }
  export default SearchBox;
  