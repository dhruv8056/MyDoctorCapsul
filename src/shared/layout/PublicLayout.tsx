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
    </>
  );
};

export default PublicLayout;
