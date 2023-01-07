import React, { useState } from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { BrowserRouter } from 'react-router-dom';
import CountriesList from '../components/ContriesList';

const Homepage = ({ countries }) => {
  const [searchItem, setSearchItem] = useState('');

  const newCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(searchItem.toLowerCase())
      || country.region.toLowerCase().includes(searchItem.toLowerCase()),
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <header className="home-header">
        <div className="logo">
          <TravelExploreIcon className="svg_icons" />
        </div>
        <div className="search">
          {' '}
          <input
            type="text"
            name="searchItem"
            placeholder="search for a country"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
      </header>

      {searchItem.length ? (
        <CountriesList countries={newCountries} />
      ) : (
        <BrowserRouter>
          <CountriesList countries={countries} />
        </BrowserRouter>
      )}
    </div>
  );
};

export default Homepage;
