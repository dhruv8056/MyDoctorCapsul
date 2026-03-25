// src/features/header/view/headerView.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { HeaderViewProps } from '../interface/IHeader';
import { APP_ROUTE } from '@shared/constant/app-route';
import header_logo from '@assets/images/header_logo.png';

const HeaderView: React.FC<HeaderViewProps> = ({
  handleSignInNavigate,
  handleSignUpNavigate,
  showSearch,
  searchQuery,
  onSearchChange,
  onSearchSubmit
}) => {
  const location = useLocation();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearchSubmit();
  };

  return (
    <header className="app-header">
      <div className="container_layout">
        <div className="header-wrapper">
          {/* ── Logo ── */}
          <div className="header-logo">
            <Link to="/">
              <img src={header_logo} alt="MDC Logo" className="logo-image" />
            </Link>
          </div>

          {/* ── Search bar (shown on home) ── */}
          {showSearch && (
            <div className="header-search">
              <div className="header-search__box">
                <Icon icon="mdi:magnify" className="header-search__icon" />
                <input
                  type="text"
                  placeholder="Search Doctors, Medicines, ...."
                  className="header-search__input"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Search"
                />
                <button className="header-search__btn" onClick={onSearchSubmit} aria-label="Submit search">
                  Search
                </button>
              </div>
            </div>
          )}

          {/* ── Auth buttons (shown on non-search routes) ── */}
          {!showSearch && (
            <div className="header-actions">
              <button className={`signup-btn ${location.pathname === APP_ROUTE.SIGN_UP ? 'active' : ''}`} onClick={handleSignUpNavigate}>
                Sign Up
              </button>
              <button className={`signin-btn ${location.pathname === APP_ROUTE.SIGNIN ? 'active' : ''}`} onClick={handleSignInNavigate}>
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderView;
