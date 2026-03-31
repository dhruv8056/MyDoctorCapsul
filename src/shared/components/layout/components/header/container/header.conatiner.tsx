import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderView from '../view/headerView';
import { APP_ROUTE } from '@shared/constant/app-route';
import GlobalContext from '@shared/context/GlobalContext';

// ─── Routes that show the search bar ─────────────────────────────────────────
const SEARCH_ROUTES: string[] = [
  APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.HOSPITALS,
  APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.CLINICS,
  APP_ROUTE.HEALTHCARE_SERVICES + APP_ROUTE.AMBULANCES,
  APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE,
  APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT,
  APP_ROUTE.DIAGNOSTIC_SECTION + APP_ROUTE.DIAGNOSTIC_CENTRE
];

const CART_ROUTES: string[] = [
  APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE,
  APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT
];

// ─── Container ────────────────────────────────────────────────────────────────

const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { searchQuery, setSearchQuery } = useContext(GlobalContext);

  const showSearch = SEARCH_ROUTES.includes(pathname);
  const showCart = CART_ROUTES.includes(pathname);

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
      showCart={showCart}
    />
  );
};

export default HeaderContainer;
