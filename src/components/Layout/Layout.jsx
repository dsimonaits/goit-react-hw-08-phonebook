import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './Layout.styled';
import Footer from 'components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { ThemeProvider } from 'styled-components';
import VendorPrefixesMuiTheme from 'components/WebVendorPrefixes/WebVendorPrefixes';

export const Layout = () => {
  // const contactsError = useSelector(selectContactsError);
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    switch (authError) {
      case 'Network Error':
        toast('Network Error');
        break;
      case 'Please authenticate':
        toast('Your session has been expired please login again');
        break;
      // case value:
      //   break;
      default:
        break;
    }
  }, [authError]);

  return (
    <ThemeProvider theme={VendorPrefixesMuiTheme}>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};
