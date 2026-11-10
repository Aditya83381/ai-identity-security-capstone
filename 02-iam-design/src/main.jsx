// React development checks and the browser DOM renderer.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Client-side navigation and Auth0 authentication context.
import { BrowserRouter } from
  "react-router-dom";
import { Auth0Provider } from
  "@auth0/auth0-react";
// Root app component and global styles.
import App from "./App.jsx";
import "./index.css";

// Mount the app into the HTML root element.
createRoot(document.getElementById("root"))
  .render(
    // Enable additional React checks in development.
    <StrictMode>
      {/* Auth0 settings come from environment variables; return to this origin. */}
      <Auth0Provider
        domain={
          import.meta.env.VITE_AUTH0_DOMAIN
        }
        clientId={
          import.meta.env.VITE_AUTH0_CLIENT_ID
        }
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        {/* Store tokens in memory and enable refresh tokens. */}
        cacheLocation="memory"
        useRefreshTokens={true}
      >
        {/* Provide routing around the root application. */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </StrictMode>
  );
