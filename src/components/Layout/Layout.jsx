import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
