import { Navigate, Route, Routes } from 'react-router-dom';
import MedicineCategoriesContainer from '../components/medicineCategories/container/medicineCategories.container';
import { APP_ROUTE } from '@shared/constant/app-route';
import MedicineProductsContainer from '../components/medicineProducts/container/medicineProducts.container';
import MedicineDetailsContainer from '../components/medicineDetails/container/medicineDetails.container';

const MedicineSectionRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={APP_ROUTE.MEDICINE_SECTION + APP_ROUTE.MEDICINE} />} />
      <Route path={APP_ROUTE.MEDICINE} element={<MedicineCategoriesContainer />} />
      <Route path={APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT} element={<MedicineProductsContainer />} />
      <Route path={APP_ROUTE.MEDICINE + APP_ROUTE.PRODUCT + APP_ROUTE.DETAILS + '/:id'} element={<MedicineDetailsContainer />} />
    </Routes>
  );
};

export default MedicineSectionRoute;
