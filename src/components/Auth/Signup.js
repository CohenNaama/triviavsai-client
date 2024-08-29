import React, { useState } from 'react';
import { registerUser, loginUser } from '../../services/authService'; 
import { Box, Alert, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../ui/StyledButton';
import StyledContainer from '../ui/StyledContainer';
import StyledTypography from '../ui/StyledTypography';
import StyledTextField from '../ui/StyledTextField';
import { useUser } from '../../contexts/UserContext';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OutlinedStyledButton from '../ui/OutlinedStyledButton';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: null,
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [fileName, setFileName] = useState(''); 
  const navigate = useNavigate();
  const { signin } = useUser();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== passwordConfirmation) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    try {
      const regResponse = await registerUser(formData);
      if (regResponse.status !== 201) {
        throw new Error(regResponse.data.message || 'Registration failed');
      }

      const loginResponse = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      if (loginResponse.status !== 200) {
        throw new Error(loginResponse.data.message || 'Login failed');
      }

      signin(loginResponse.data.access_token);

      setSuccess('Registration, login, and profile setup successful!');
      setError('');

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError(error.message);
      setSuccess('');
    }
  };

  return (
    <StyledContainer maxWidth="xs">
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
          Sign up
        </StyledTypography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <StyledTextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <StyledTextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <StyledTextField
            fullWidth
            label="Confirm Password"
            name="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <OutlinedStyledButton
            variant="outlined"
            component="label"
          >
            <CloudUploadIcon />
            Upload Profile Picture
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </OutlinedStyledButton>
          {fileName && (
            <Typography
              variant="body2"
              sx={{ color: '#FFFFFF', mt: 1, textAlign: 'center' }}
            >
              {fileName}
            </Typography>
          )}
          <StyledButton type="submit">
            Sign up
          </StyledButton>
        </form>
      </Box>
    </StyledContainer>
  );
};

export default SignUp;
