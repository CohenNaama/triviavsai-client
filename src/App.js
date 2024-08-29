import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AuthRoutes from './routes/AuthRoutes';
import { UserProvider } from './contexts/UserContext';
import { Box } from '@mui/material';


function App() {
  return (
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #00072D, #00204A)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle, rgba(0, 255, 234, 0.2), transparent 60%)',
              zIndex: 1,
            }}
          />
          <UserProvider>
            <Box sx={{ zIndex: 2 }}> 
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<AuthRoutes />} />
              </Routes>
            </Box>
          </UserProvider>
        </Box>
      </Router>
  );
}

export default App;
