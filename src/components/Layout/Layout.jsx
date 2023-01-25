import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';
import Footer from 'components/Footer/Footer';
import { PageContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <PageContainer>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </PageContainer>
  );
};
