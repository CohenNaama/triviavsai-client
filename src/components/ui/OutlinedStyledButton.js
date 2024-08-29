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

const OutlinedStyledButton = ({ children, ...props }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      
      sx={{
        // mt: 2,
        color: '#00FFEA', // Text color
        textTransform: 'none',
        borderRadius: '10px',
        // borderRadius: '30px',
        boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)', 
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        border: '2px solid transparent', // Transparent to show the animated border
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '30px', // Rounded corners for the pseudo-element
          border: '2px solid', // Solid border to apply the gradient animation
          zIndex: -1,
          animation: `${borderGlow} 3s linear infinite`, // Apply the keyframes animation
        },
        '&:hover': {
          background: 'transparent', // No background on hover
          color: '#ff9d80', // Text color on hover
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default OutlinedStyledButton;
