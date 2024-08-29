import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { Alert, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StyledContainer from '../ui/StyledContainer';
import StyledTypography from '../ui/StyledTypography';
import StyledTextField from '../ui/StyledTextField';
import StyledButton from '../ui/StyledButton';
import { loginUser } from '../../services/authService';

const Login = () => {
  const { signin } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      
      if (response.status === 200) {
        signin(response.data.access_token);
        navigate('/');
        console.log("login successful!");
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };
  return (
    <StyledContainer>
            <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
        sx={{
          background: 'linear-gradient(180deg, #00072D, #00204A)', 
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 15px 25px rgba(0, 255, 234, 0.4), 0 5px 10px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(0, 255, 234, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
      <StyledTypography variant="h4" gutterBottom>
        Login
      </StyledTypography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledTextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">
          Login
        </StyledButton>
      </form>
      </Box>
    </StyledContainer>
  );
};

export default Login;
