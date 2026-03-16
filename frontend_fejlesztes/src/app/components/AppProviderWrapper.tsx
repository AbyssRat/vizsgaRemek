import React, { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { AppProvider } from '../context/AppContext';

export const AppProviderWrapper: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      {children || <Outlet />}
    </AppProvider>
  );
};
