import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const neonGlowAnimation = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 10px #00FFEA,
      0 0 20px #00FFEA,
      0 0 30px #00FFEA,
      0 0 50px #00FFEA,
      0 0 100px #00FFEA;
  }
  33% {
    box-shadow: 
      0 0 10px #FF00FF,
      0 0 20px #FF00FF,
      0 0 30px #FF00FF,
      0 0 50px #FF00FF,
      0 0 100px #FF00FF;
  }
  66% {
    box-shadow: 
      0 0 10px #FF7043,
      0 0 20px #FF7043,
      0 0 30px #FF7043,
      0 0 50px #FF7043,
      0 0 100px #FF7043;
  }
`;

const StyledContainer = ({ children, ...props }) => {
  return (
    <Box
      maxWidth="xs"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      sx={{
        background: 'linear-gradient(180deg, #00072D, #00204A)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 15px 25px rgba(0, 255, 234, 0.4), 0 5px 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(0, 255, 234, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        animation: `${neonGlowAnimation} 5s infinite`,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default StyledContainer;
