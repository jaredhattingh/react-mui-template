import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const ApiTokenContext = React.createContext([{}, () => {}]);

const ApiTokenProvider = (props) => {
  const [token, setToken] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  const getApiToken = async () => {
    const apiToken = await getAccessTokenSilently();
    if (apiToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${apiToken}`;
      setToken(apiToken);
    }
  };

  return (
    <ApiTokenContext.Provider value={[token, getApiToken]}>
      {props.children}
    </ApiTokenContext.Provider>
  );
};

export { ApiTokenContext, ApiTokenProvider };
