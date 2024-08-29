import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import isValidToken from '../utils/TokenValidation';
import { useUser } from '../contexts/UserContext';
import { jwtDecode } from 'jwt-decode';



const AuthGuard = ({ component: Component, allowedRoles, ...rest }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (!token || !isValidToken(token)) {
      navigate('/login');
    } else {
      const decodedToken = jwtDecode.decode(token);
      const token_role = decodedToken?.Role || [];
      const hasAccess = allowedRoles.some((role) => role === token_role);

      if (!hasAccess) {
        navigate('/forbidden');
      }
    }
  }, [navigate, allowedRoles]);

  return <Component user={user} {...rest} />;
};

export default AuthGuard;