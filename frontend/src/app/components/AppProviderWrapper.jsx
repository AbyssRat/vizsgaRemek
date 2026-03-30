import { Outlet } from 'react-router';
import { AppProvider } from '../context/AppContext';

export const AppProviderWrapper = ({ children }) => {
  return (
    <AppProvider>
      {children || <Outlet />}
    </AppProvider>
  );
};
