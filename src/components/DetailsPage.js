import React from 'react';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <header className="home-header">
        <div className="logo" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
          Back
        </div>
      </header>
      <div className="details-page-details">
        <div>
          <img src={location.state.flag} alt="Country flag" />
        </div>
        <div className="state-details">
          <h2>{location.state.name}</h2>
          <p>
            Native Name:
            {location.state.nativeName}
          </p>
          <p>
            Population:
            {location.state.population}
          </p>
          <p>
            Continent:
            {location.state.region}
          </p>
          <p>
            Sub Region:
            {location.state.subregion}
          </p>
          <p>
            Capital:
            {location.state.capital}
          </p>
          <p>
            Currency:
            {location.state.currencies[0].name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
