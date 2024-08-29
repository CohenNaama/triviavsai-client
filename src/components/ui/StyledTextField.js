import React from 'react';
import { TextField } from '@mui/material';

const StyledTextField = ({ label, ...props }) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      margin="normal"
      InputProps={{
        style: { color: '#FFFFFF' }, // White text color
      }}
      InputLabelProps={{
        style: { color: '#00FFEA' }, // Neon cyan label color
      }}
      sx={{
        backgroundColor: 'rgba(27, 33, 58, 0.8)', // Semi-transparent background
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)', // Neon shadow
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#00FFEA', // Neon cyan border
          },
          '&:hover fieldset': {
            borderColor: '#FF00FF', // Neon pink border on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FF7043', // Neon orange border when focused
          },
        },
      }}
      {...props}
    />
  );
};

export default StyledTextField;
