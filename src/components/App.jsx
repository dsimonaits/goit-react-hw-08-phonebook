import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUserRefresh } from 'redux/auth/auth-selectors';
import { selectUserRefreshCompleted } from 'redux/auth/auth-selectors';
import { refreshUser } from 'redux/auth/auth-operations';
import { HomePage } from 'pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Contacts } from 'pages/ContactsPage';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const refreshingCompleted = useSelector(selectUserRefreshCompleted);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {refreshingCompleted && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
