
# Auth0 React + Vite Demo

This folder contains a React single-page application built with Vite and the
Auth0 React SDK. It demonstrates sign-in with Auth0 Universal Login, using
OAuth 2.0 Authorization Code Flow with PKCE and OpenID Connect (OIDC). The
dashboard route is protected and displays the authenticated user's profile.

## Prerequisites

- Node.js and npm
- An Auth0 tenant and a Single Page Application registered in the Auth0
  Dashboard

## Configure Auth0

1. In the Auth0 Dashboard, create or select an application with the
   **Single Page Application** application type.
2. Copy `.env.example` to `.env` in this folder and fill in the values from
   your Auth0 application:

   ```dotenv
   VITE_AUTH0_DOMAIN=your-tenant-region.auth0.com
   VITE_AUTH0_CLIENT_ID=your-auth0-application-client-id
   ```

   Use your tenant's actual domain and the application's Client ID. Keep
   `.env` local; do not commit your own environment values.
3. In the application's Auth0 settings, add the local Vite origin
   `http://localhost:5173` to **Allowed Callback URLs**, **Allowed Logout URLs**,
   and **Allowed Web Origins**.

The app uses its current browser origin as the login callback and logout
return URL. The Auth0 SDK redirects to Universal Login and uses PKCE for the
authorization code flow. The SDK configuration requests the default OIDC
identity scopes needed for the signed-in user's profile.

## Run locally

From this folder, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:5173`).
Select **Log in** to authenticate, then open **Dashboard** to see the
protected page and profile. Use **Log out** to end the Auth0 session.

## Other commands

```bash
npm run build   # Build the production app into dist/
npm run preview # Preview the production build locally
npm run lint    # Run ESLint
```
Created 02-iam-design/README.md with Auth0 setup steps for the React + Vite app, including Universal Login, OAuth 2.0 PKCE, OIDC, .env.example configuration, and npm install / npm run dev instructions.