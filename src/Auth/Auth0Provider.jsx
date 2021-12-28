import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider as AuthProvider } from '@auth0/auth0-react';

const Auth0Provider = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <AuthProvider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      audience={audience}
      issuer={domain}
      scope={'read:all basic highest offline_access'}
    >
      {children}
    </AuthProvider>
  );
};

export default Auth0Provider;
