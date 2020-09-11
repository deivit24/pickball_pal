import React, { useState } from 'react';
import { useQueryState } from 'react-router-use-location-state';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import '../../assets/css/Search.css';

const Search = ({ searchFor }) => {
  const [search, setSearch] = useQueryState('search', '');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchFor(search);
  };

  const handleChange = (evt) => {
    setSearch(evt.target.value);
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
