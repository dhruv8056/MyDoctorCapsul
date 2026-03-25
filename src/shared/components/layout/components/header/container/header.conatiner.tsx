// src/features/header/container/headerContainer.tsx
import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderView from '../view/headerView';
import { APP_ROUTE } from '@shared/constant/app-route';
import GlobalContext from '@shared/context/GlobalContext';

// ─── Routes that show the search bar ─────────────────────────────────────────
const SEARCH_ROUTES: string[] = [
  APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.HEALTHCARE_SERVICES_HOSPITALS,
  APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.HEALTHCARE_SERVICES_CLINICS,
  APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.HEALTHCARE_SERVICES_AMBULANCES
];

// ─── Container ────────────────────────────────────────────────────────────────

const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { searchQuery, setSearchQuery } = useContext(GlobalContext);

  const showSearch = SEARCH_ROUTES.includes(pathname);

  const handleSignInNavigate = () => navigate(APP_ROUTE.SIGNIN);
  const handleSignUpNavigate = () => navigate(APP_ROUTE.SIGN_UP);

  const handleSearchSubmit = () => {};

  return (
    <HeaderView
      handleSignInNavigate={handleSignInNavigate}
      handleSignUpNavigate={handleSignUpNavigate}
      showSearch={showSearch}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSearchSubmit={handleSearchSubmit}
    />
  );
};

export default HeaderContainer;
