import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

// wrapper component with history
// to redirect users to their target page
export const Auth0ProviderWithHistory = ({ children }) => {
    // Auth0 keys
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // history initializer
  const history = useNavigate();

  // component callback
  const onRedirectCallback = ( appState ) => {
    history( appState?.returnTo || window.location.pathname );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      { children }
    </Auth0Provider>
  )
}