import AppRoutes from 'routes/AppRoutes';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfirmDialogProvider } from '@shared/components/confirmModal/view/confirmDialogProvider';

function App() {
  return (
    <>
      <Router>
        <ConfirmDialogProvider>
          <AppRoutes />
        </ConfirmDialogProvider>
      </Router>
    </>
  );
}

export default App;
