import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from './Layout.styled';
import Footer from 'components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { ThemeProvider } from 'styled-components';
import VendorPrefixesMuiTheme from 'components/WebVendorPrefixes/WebVendorPrefixes';

export const Layout = () => {
  const authError = useSelector(selectAuthError);
  const location = useLocation();

  useEffect(() => {
    switch (authError) {
      case 'Request failed with status code 400':
        if (location.pathname === '/login') {
          toast.warn('Wrong password or email!', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        if (location.pathname === '/register') {
          toast.warn('User with this email probably already registered', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        break;
      case 'Network Error':
        toast.warn('Network Error', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case 'Please authenticate':
        if (location.pathname === '/login') {
          toast.warn('Your session has been expired please login again', {
            position: toast.POSITION.TOP_CENTER,
          });
        }

        break;

      default:
        break;
    }
  }, [authError, location]);

  return (
    <ThemeProvider theme={VendorPrefixesMuiTheme}>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};
