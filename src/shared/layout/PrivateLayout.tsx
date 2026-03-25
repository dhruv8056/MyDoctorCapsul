import { Navigate, Outlet } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';

const PrivateLayout = () => {
  const token = localStorage.getItem('token');
  console.log('🚀 ~ PrivateRoute ~ token:', token);

  return token ? <Outlet /> : <Navigate to={APP_ROUTE.SIGNIN} />;
};

export default PrivateLayout;
