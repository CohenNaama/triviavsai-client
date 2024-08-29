import React from 'react';
import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const textGlowAnimation = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 10px #00FFEA,
      0 0 20px #00FFEA,
      0 0 30px #00FFEA;
  }
  33% {
    text-shadow: 
      0 0 10px #FF00FF,
      0 0 20px #FF00FF,
      0 0 30px #FF00FF;
  }
  66% {
    text-shadow: 
      0 0 10px #FF7043,
      0 0 20px #FF7043,
      0 0 30px #FF7043;
  }
`;

const StyledTypography = ({ children, ...props }) => {
  return (
    <Typography
      {...props}
      sx={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#FFFFFF', 
        letterSpacing: '2px',
        // position: 'relative',
        // animation: `${textGlowAnimation} 3s infinite`,
        textAlign: 'center',
      }}
    >
      {children}
    </Typography>
  );
};

export default StyledTypography;
