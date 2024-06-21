// Importing necessary hooks and components from React and other libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from '@mantine/core';
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  // State variables to manage search input and search type
  const [searchValue, setSearchValue] = useState('');
  const [searchValueType, setSearchValueType] = useState('tracks');
  const navigate = useNavigate();

  // Function to handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the search results page with query parameters
    navigate(`/search?searchValue=${searchValue}&searchValueType=${searchValueType}`);
  };

  return (
    <form onSubmit={handleSearch} className="bar">
      <div className="search-bar">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search "
        />
        <Select
          placeholder="Pick value"
          data={['tracks', 'albums', 'artists', 'genres', 'podcasts']}
          defaultValue="tracks"
          allowDeselect={true}
          clearable
          value={searchValueType}
          onChange={(value) => setSearchValueType(value)}
          w={250}
        />
        <button type="submit" className="btn">
          <BiSearchAlt size={25}/>
        </button>
      </div>
    </form>
  );
};

export default Search;
