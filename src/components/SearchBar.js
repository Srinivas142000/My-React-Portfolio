import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);  // Pass the query to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBInput
        label="Search for Yoga's projects, ideas, etc."
        value={query}
        onChange={handleChange}
        type="text"
        className="me-2"
        required
      />
      <MDBBtn type="submit" color="primary">
        Find
      </MDBBtn>
    </form>
  );
};

export default SearchBar;
