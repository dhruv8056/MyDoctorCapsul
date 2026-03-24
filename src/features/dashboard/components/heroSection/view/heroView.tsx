import React from 'react';
import { Icon } from '@iconify/react';

const HeroView: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="container_layout">
        <h1 className="hero-title">
          Find Trusted Healthcare
          <br /> Near You
        </h1>

        <div className="hero-search">
          <div className="search-input-box">
            <Icon icon="mdi:magnify" className="search-icon" />

            <input type="text" placeholder="Search Doctors, Medicines, ...." className="search-input" />

            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
