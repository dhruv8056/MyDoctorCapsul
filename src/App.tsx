import AppRoutes from 'routes/AppRoutes';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfirmDialogProvider } from '@shared/components/confirmModal/view/confirmDialogProvider';
import ScrollToTop from '@shared/components/common/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ConfirmDialogProvider>
          <ScrollToTop />
          <AppRoutes />
        </ConfirmDialogProvider>
      </Router>
    </>
  );
}

export default App;
