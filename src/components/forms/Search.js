// React\
import React from 'react';
// Use State for location
import { useQueryState } from 'react-router-use-location-state';
// Material UI
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// Search UI
import '../../assets/css/Search.css';

const Search = ({ searchFor }) => {
  const [search, setSearch] = useQueryState('search', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFor(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" mb-4">
      <form id="Search" noValidate autoComplete="on" onSubmit={handleSubmit}>
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <InputBase
          className="input-search"
          placeholder="Enter City or Zip Code"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </form>
      <small style={{ color: 'white' }}>
        Press Enter (eg. Austin, TX or 78745)
      </small>
    </div>
  );
};

export default Search;
