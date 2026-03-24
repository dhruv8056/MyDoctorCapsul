import React from 'react';
//import { Link } from 'react-router-dom';
import { HeaderViewProps } from '../interface/IHeader';
import { APP_ROUTE } from '@shared/constant/app-route';
import header_logo from '@assets/images/header_logo.png';

const HeaderView: React.FC<HeaderViewProps> = ({ handleSignInNevigate, handleSignUpNevigate }) => {
  return (
    <header className="app-header">
      <div className="container_layout">
        <div className="header-wrapper">
          {/* Logo */}
          <div className="header-logo">
            <img src={header_logo} alt="MDC Logo" className="logo-image" />
          </div>

          {/* Navigation */}
          {/* <nav className="header-nav">
            <Link to="/doctors">Doctors</Link>
            <Link to="/">Home</Link>
            <Link to="/pharmacy">Pharmacy</Link>
            <Link to="/clinic">Clinic</Link>
            <Link to="/diagnostics">Diagnostics</Link>
          </nav> */}

          {/* Actions */}
          <div className="header-actions">
            <button className={`signup-btn ${location.pathname === APP_ROUTE.SIGN_UP ? 'active' : ''}`} onClick={handleSignUpNevigate}>
              Sign Up
            </button>

            <button className={`signin-btn ${location.pathname === APP_ROUTE.SIGNIN ? 'active' : ''}`} onClick={handleSignInNevigate}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderView;
