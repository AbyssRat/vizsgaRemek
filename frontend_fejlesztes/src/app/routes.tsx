import { createBrowserRouter } from 'react-router';
import { AppProviderWrapper } from './components/AppProviderWrapper';
import { RootLayout } from './layouts/RootLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { BookDetail } from './pages/BookDetail';
import { About } from './pages/About';
import { Legal } from './pages/Legal';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Reader } from './pages/Reader';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminBooks } from './pages/admin/AdminBooks';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminSupport } from './pages/admin/AdminSupport';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <AppProviderWrapper />,
    children: [
      {
        path: '/',
        Component: RootLayout,
        children: [
          { index: true, Component: Home },
          { path: 'browse', Component: Browse },
          { path: 'book/:id', Component: BookDetail },
          { path: 'about', Component: About },
          { path: 'legal', Component: Legal },
          { path: 'login', Component: Login },
          { path: 'signup', Component: Signup },
          { path: 'dashboard', Component: Dashboard },
          { path: 'cart', Component: Cart },
          { path: 'checkout', Component: Checkout },
        ],
      },
      {
        path: '/reader/:id',
        Component: Reader,
      },
      {
        path: '/admin',
        Component: AdminLayout,
        children: [
          { index: true, Component: AdminDashboard },
          { path: 'books', Component: AdminBooks },
          { path: 'users', Component: AdminUsers },
          { path: 'support', Component: AdminSupport },
        ],
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);