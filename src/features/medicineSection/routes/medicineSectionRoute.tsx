import { Navigate, Route, Routes } from 'react-router-dom';
import MedicineCategoriesContainer from '../components/medicineCategories/container/medicineCategories.container';
import { APP_ROUTE } from '@shared/constant/app-route';

const MedicineSectionRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE} />} />
      <Route path={APP_ROUTE.MEDICINE} element={<MedicineCategoriesContainer />} />
    </Routes>
  );
};

export default MedicineSectionRoute;
