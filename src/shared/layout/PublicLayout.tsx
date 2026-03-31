import ProductCartContainer from '@features/medicineSection/components/productCart/container/productCart.container';
import FooterContainer from '@shared/components/layout/components/footer/container/footer.container';
import HeaderConatiner from '@shared/components/layout/components/header/container/header.conatiner';
import { APP_ROUTE } from '@shared/constant/app-route';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const location = useLocation();

  const isHideFooter =
    location.pathname.startsWith(APP_ROUTE.SIGNIN) ||
    location.pathname.startsWith(APP_ROUTE.SIGN_UP) ||
    location.pathname.startsWith(APP_ROUTE.FORGET_PASSWORD);

  return (
    <>
      <HeaderConatiner />

      {/* ✅ GLOBAL DRAWER */}
      <ProductCartContainer />

      <main>
        <Outlet />
      </main>

      {!isHideFooter && <FooterContainer />}
    </>
  );
};

export default PublicLayout;
