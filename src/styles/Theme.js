import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FFEA', // Neon cyan
    },
    secondary: {
      main: '#FF7043', // Neon orange
    },
    background: {
      default: 'transparent', // Set to transparent to show the global gradient
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FF00FF', // Neon pink
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#FF00FF', // Neon pink for headings
      textShadow: '0 2px 4px rgba(255, 0, 255, 0.7)', // 3D text shadow effect
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '30px',
          background: 'linear-gradient(45deg, #00FFEA, #FF00FF, #FF7043)', // Neon gradient background
          color: '#1e1e1e',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF7043, #FF00FF, #00FFEA)', // Reversed gradient on hover
            color: '#ff9d80', // Text color on hover
          },
        },
        outlined: {
          textTransform: 'none',
          background: 'transparent', // No background for outlined variant
          color: '#00FFEA', // Text color and border color
          borderImage: 'linear-gradient(45deg, #00FFEA, #FF00FF, #FF7043) 1', // Gradient border
          borderImageSlice: 1, // Ensures the gradient border is displayed correctly
          borderRadius: '30px', 
          boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)', 
          '&:hover': {
            // borderImage: 'linear-gradient(45deg, #FF7043, #FF00FF, #00FFEA) 1', // Gradient border on hover
            borderImageSlice: 1,
            color: '#ff9d80', // Text color on hover
            background: 'transparent',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: '#FFFFFF',
          },
          '& label.Mui-focused': {
            color: '#FF00FF',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00FFEA',
            },
            '&:hover fieldset': {
              borderColor: '#FF00FF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF7043',
            },
          },
        },
      },
    },
  },
});

export default theme;
