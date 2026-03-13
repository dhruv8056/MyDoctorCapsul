import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginContainer from '@shared/components/auth/login/container/login.container';
import { APP_ROUTE } from '@shared/constant/app-route';
import { APP_CONSTANTS } from '@shared/constant/app.constant';
import useProcessQueue from '@shared/hooks/useProcessQueue';
import CheckRoleRoute from '@shared/utils/checkRoleRoute';
import PrivateRoute from '@shared/utils/privateRoute';
import SuperAdminRoutes from '@shared/components/Routes/superAdminRoutes';
import Sidebar from '@shared/components/layout/components/sidebar';
import UserRoutes from '@shared/components/Routes/userRoutes';
import DoctorRoutes from '@shared/components/Routes/doctorRoute';
import PharmacyRoutes from '@shared/components/Routes/pharmacyRoute';
import DignosticRoutes from '@shared/components/Routes/dignosticsRoute';

function AppRoutes() {
  const { processQueue } = useProcessQueue();

  useEffect(() => {
    const handleOnline = () => {
      processQueue();
    };
    handleOnline();
    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [processQueue]);

  return (
    <Routes>
      <Route path={APP_ROUTE.LOGIN} element={<LoginContainer />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route element={<Sidebar />}>
          <Route path={APP_ROUTE.DIAGNOSTIC_CENTRE} element={<CheckRoleRoute checkFor={APP_CONSTANTS.ROLE_NAME.DIAGNOSTIC_CENTRE} />}>
            <Route path="*" element={<DignosticRoutes />} />
          </Route>
          <Route path={APP_ROUTE.PHARMACY} element={<CheckRoleRoute checkFor={APP_CONSTANTS.ROLE_NAME.PHARMACY} />}>
            <Route path="*" element={<PharmacyRoutes />} />
          </Route>
          <Route path={APP_ROUTE.SUPER_ADMINS} element={<CheckRoleRoute checkFor={APP_CONSTANTS.ROLE_NAME.ADMIN} />}>
            <Route path="*" element={<SuperAdminRoutes />} />
          </Route>
          <Route path={APP_ROUTE.DOCTOR} element={<CheckRoleRoute checkFor={APP_CONSTANTS.ROLE_NAME.DOCTOR} />}>
            <Route path="*" element={<DoctorRoutes />} />
          </Route>
          <Route path={APP_ROUTE.USER} element={<CheckRoleRoute checkFor={APP_CONSTANTS.ROLE_NAME.USER} />}>
            <Route path="*" element={<UserRoutes />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
