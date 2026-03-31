import { APP_ROUTE } from '@shared/constant/app-route';
import { Navigate, Route, Routes } from 'react-router-dom';
import DiagnosticCenterContainer from '../components/diagnosticCenter/container/diagnosticCenter.container';
import DiagnosticCategoriesContainer from '../components/diagnosticCategories/container/diagnosticCategories.container';
import DiagnosticDetailsContainer from '../components/diagnosticDetails/container/diagnosticDetails.container';

const DiasgnosticsCenterRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={APP_ROUTE.DIAGNOSTIC_SECTION + APP_ROUTE.DIAGNOSTIC_CENTRE} />} />
      <Route path={APP_ROUTE.DIAGNOSTIC_CENTRE} element={<DiagnosticCenterContainer />} />
      <Route path={APP_ROUTE.DIAGNOSTIC_CENTRE + APP_ROUTE.DIAGNOSTIC_CATEGORIES} element={<DiagnosticCategoriesContainer />} />
      <Route
        path={APP_ROUTE.DIAGNOSTIC_CENTRE + APP_ROUTE.DIAGNOSTIC_CATEGORIES + APP_ROUTE.DIAGNOSTIC_DETAILS}
        element={<DiagnosticDetailsContainer />}
      />
    </Routes>
  );
};

export default DiasgnosticsCenterRoute;
