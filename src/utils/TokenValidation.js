import {jwtDecode} from 'jwt-decode'; 

const isValidToken = (token) => {
  try {
    if (!token) {
      throw new Error('Token does not exist');
    }

    const decodedToken = jwtDecode(token); 

    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
      throw new Error('Token has expired');
    }

    return true;
  } catch (error) {
    console.error('Error validating token:', error.message);
    return false;
  }
};

export default isValidToken;
