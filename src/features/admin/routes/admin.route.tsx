import { Route, Routes } from 'react-router-dom';
import PageNotFound from '@shared/components/common/PageNotFound';


export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
