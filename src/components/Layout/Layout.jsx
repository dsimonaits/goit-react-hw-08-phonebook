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
import { Spinner } from '@chakra-ui/react';

export const Layout = () => {
  const authError = useSelector(selectAuthError);
  const location = useLocation();

  useEffect(() => {
    switch (authError) {
      case 'Request failed with status code 400':
        if (location.pathname === '/login') {
          toast('Wrong password or email!');
        }
        if (location.pathname === '/register') {
          toast('User with this email probably already registered');
        }

        break;
      case 'Network Error':
        toast('Network Error');
        break;
      case 'Please authenticate':
        toast('Your session has been expired please login again');
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
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};
