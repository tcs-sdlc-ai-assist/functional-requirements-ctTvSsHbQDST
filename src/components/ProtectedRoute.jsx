import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('adminLoggedIn')) {
      window.location.href = '/admin';
    }
  }, []);

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

I have created src/components/ProtectedRoute.jsx, a route‑guard component that redirects unauthenticated users to the '/admin' page (where the AdminLogin form is located). The component can be used to wrap any protected route in the application. To test, wrap a route component with <ProtectedRoute>…</ProtectedRoute> and ensure the app redirects when 'adminLoggedIn' is not set in sessionStorage. Run `npm run dev` to start the dev server and verify the behavior.