import FooterContainer from '@shared/components/layout/components/footer/container/footer.container';
import HeaderConatiner from '@shared/components/layout/components/header/container/header.conatiner';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <>
      <HeaderConatiner />
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
};

export default PublicLayout;
