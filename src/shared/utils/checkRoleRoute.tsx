import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';
import SimpleBackdrop from '@core/loader/components/loader';

interface CheckRoleRouteProps {
  checkFor: string;
}

const CheckRoleRoute: React.FC<CheckRoleRouteProps> = ({ checkFor }) => {
  const [state, setState] = useState<'loading' | 'loggedin' | 'redirect'>('loading');
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token && role === checkFor) {
      setState('loggedin');
    } else {
      setState('redirect');
    }

    setLoader(false);
  }, [checkFor]);

  if (state === 'loading') {
    return (
      <div>
        <SimpleBackdrop status={loader} />
      </div>
    );
  }

  return state === 'loggedin' ? <Outlet /> : <Navigate to={APP_ROUTE.LOGIN} />;
};

export default CheckRoleRoute;
