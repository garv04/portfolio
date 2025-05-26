import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={trigger ? 4 : 0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: trigger ? 'rgba(18, 18, 18, 0.9)' : 'transparent',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ maxWidth: 'lg', width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h5"
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            flexGrow: 1,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Garv Hingad
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={RouterLink}
              to={item.path}
              color="inherit"
              sx={{
                mx: 1,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: location.pathname === item.path ? '100%' : '0%',
                  height: '2px',
                  bottom: 0,
                  left: 0,
                  backgroundColor: '#2196f3',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 