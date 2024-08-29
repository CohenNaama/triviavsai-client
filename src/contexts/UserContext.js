import { useState, createContext, useContext } from "react";
import { jwtDecode } from 'jwt-decode';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
  
    const signin = (accessToken) => {
      if (!accessToken) {
        console.error('No access token provided.');
        return;
      }
    
      try {
        localStorage.setItem('access_token', accessToken);
        const decodedToken = jwtDecode(accessToken); 
    
        if (decodedToken && decodedToken.UserId) {
          setUser({
            id: decodedToken.UserId,
            username: decodedToken.Username,
            role: decodedToken.Role,
            email: decodedToken.Email,
          });
        }
      } catch (error) {
        console.error('Invalid token or error during token decoding:', error.message);
        setError('Invalid token, please log in again.');
      }
    };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('access_token');
  };

  return (
    <UserContext.Provider value={{ user, signin, signout }}>
      {children}
    </UserContext.Provider>
  );
};
