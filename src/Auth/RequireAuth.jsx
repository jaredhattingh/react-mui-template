import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { ApiTokenProvider } from '../Auth/ApiTokenContext';

import Error from '../Pages/Error';
import Loading from '../Components/Loading';

function RequireAuth() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  let location = useLocation();

  if (error) {
    return <Error message='Failed to login' />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location }} />;
  }

  return (
    <ApiTokenProvider>
      <Outlet />
    </ApiTokenProvider>
  );
}

export default RequireAuth;
