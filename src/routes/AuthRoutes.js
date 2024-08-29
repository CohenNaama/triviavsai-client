import React from 'react';
import { Routes } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import AuthGuard from '../guards/AuthGuards';


const AuthRoutes = () => {
  const { user } = useUser();

  return (
    <Routes>
      {/* <Route
        path="/"
        element={<AuthGuard component={HomePage} allowedRoles={['Customer', 'Admin', 'Staff']} />}
      /> */}

    </Routes>
  );
};

export default AuthRoutes;
