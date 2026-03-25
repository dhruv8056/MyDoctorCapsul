// src\main.tsx
import './index.scss';

import { ThemeProvider } from '@core/theme';
import { GlobalProvider } from '@shared/context/GlobalContext/index.tsx';
import store from '@store/app.store.ts';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider persistPreference={true} syncWithSystem={true}>
      <GlobalProvider>
        <ToastContainer />
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </Provider>
);
