// Router utilities for navigation and route definitions.
import { Routes, Route, Link } from
  "react-router-dom";
// Auth0 hooks and wrapper for protecting routes.
import {
  useAuth0,
  withAuthenticationRequired,
} from "@auth0/auth0-react";

// Shows login/logout controls based on the current authentication state.
function AuthButtons() {
  const { isAuthenticated, isLoading,
    loginWithRedirect, logout } = useAuth0();

  // Show while Auth0 loads the user session.
  if (isLoading) return <p>Loading...</p>;

  if (isAuthenticated) {
    return (
      // Logs the user out and returns them to the app's home origin.
      <button onClick={() => logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      })}>
        Log out
      </button>
    );
  }
  return (
    // Starts the Auth0 login flow.
    <button onClick={() => loginWithRedirect()}>
      Log in
    </button>
  );
}

// Displays the authenticated user's profile data.
function Profile() {
  const { user } = useAuth0();
  if (!user) return null;
  return (
    <div>
      <img src={user.picture} alt=""
        width="80" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// Protected dashboard page content shown only after login.
function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile />
    </div>
  );
}

// Redirects unauthenticated users to login before showing the dashboard.
const Dashboard = withAuthenticationRequired(
  DashboardPage,
  { onRedirecting: () => <p>Redirecting...</p> }
);

// Public page available without authentication.
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Public page.</p>
    </div>
  );
}

// Main app layout with navigation and routed pages.
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>
        {" | "}
        <AuthButtons />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard"
          element={<Dashboard />} />
      </Routes>
    </div>
  );
}