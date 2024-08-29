import React from 'react';
import { Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const borderGlow = keyframes`
  0% {
    border-color: #FF00FF; /* Start with pink */
  }
  50% {
    border-color: #00FFEA; /* Transition to cyan */
  }
  100% {
    border-color: #FF7043; /* End with orange */
  }
`;

const StyledButton = ({ children, ...props }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{
        mt: 2,
        background: 'linear-gradient(90deg, #00FFEA, #FF00FF, #FF7043)',
        color: '#FFFFFF',
        textTransform: 'none',
        borderRadius: '30px',
        fontWeight: 'bold',
        position: 'relative', // Make sure the button is positioned relative
        zIndex: 1, // Ensure button content is on top
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: '32px',
          background: 'transparent', // Transparent background
          border: '3.5px solid', // Solid border to apply the gradient animation
          zIndex: -1, // Background behind the button
          animation: `${borderGlow} 3s linear infinite`, // Apply the keyframes animation
        },
        '&:hover': {
          background: 'linear-gradient(90deg, #FF7043, #FF00FF, #00FFEA)', 
        },
                '@keyframes borderGlow': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
