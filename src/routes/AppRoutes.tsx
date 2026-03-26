import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTE } from '@shared/constant/app-route';
import { APP_CONSTANTS } from '@shared/constant/app.constant';
import useProcessQueue from '@shared/hooks/useProcessQueue';
import CheckRoleRoute from '@shared/utils/checkRoleRoute';
import SuperAdminRoutes from '@shared/components/Routes/superAdminRoutes';
import UserRoutes from '@shared/components/Routes/userRoutes';
import DoctorRoutes from '@shared/components/Routes/doctorRoute';
import PharmacyRoutes from '@shared/components/Routes/pharmacyRoute';
import DignosticRoutes from '@shared/components/Routes/dignosticsRoute';
import PublicLayout from '@shared/layout/PublicLayout';
import PrivateLayout from '@shared/layout/PrivateLayout';
import SignupContainer from '@shared/components/auth/signUp/container/signup.container';
import SigninContainer from '@shared/components/auth/signIn/container/signin.container';
import ForgetPassworContainer from '@shared/components/auth/forget-password/container/forgetPassword.container';
import HealthcareServiceDiscoveryRoute from '@features/healthcareServiceDiscovery/routes/healthcareServiceDiscoveryRoute';
import HomeRoute from '@features/home/routes/homeRoute';
import HealthcareInformationRoute from '@features/healthcareinformation/routes/healthcareInformationRoute';
import MedicineSectionRoute from '@features/medicineSection/routes/medicineSectionRoute';

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
      <Route element={<PublicLayout />}>
        <Route index element={<HomeRoute />} />
        <Route path={APP_ROUTE.SIGNIN} element={<SigninContainer />} />
        <Route path={APP_ROUTE.SIGN_UP} element={<SignupContainer />} />
        <Route path={APP_ROUTE.FORGET_PASSWORD} element={<ForgetPassworContainer />} />

        {/* Health care Routes */}
        <Route path={APP_ROUTE.HEALTHCARE_SERVICES + '*'} element={<HealthcareServiceDiscoveryRoute />} />
        <Route path={APP_ROUTE.HEALTHCARE_INFORMATION + '*'} element={<HealthcareInformationRoute />} />
        <Route path={APP_ROUTE.MEDICINE_SECTION + '*'} element={<MedicineSectionRoute />} />
      </Route>

      <Route path="/" element={<PrivateLayout />}>
        <Route element="">
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
