import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to={redirectTo} />;
};
