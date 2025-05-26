import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Link,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      value: 'garvjain303@gmail.com',
      link: 'mailto:garvjain303@gmail.com',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      value: '+91 9699148805',
      link: 'tel:+919699148805',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/garv-hingad',
      link: 'https://www.linkedin.com/in/garv-hingad',
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      title: 'GitHub',
      value: 'github.com/garv04',
      link: 'https://github.com/garv04',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)',
        pt: 8,
        pb: 12,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 8,
            }}
          >
            Feel free to reach out to me for any opportunities or collaborations
          </Typography>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4} justifyContent="center">
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                      }}
                    >
                      <IconButton
                        color="primary"
                        size="large"
                        sx={{
                          mb: 2,
                          color: '#fff',
                          backgroundColor: 'rgba(33, 150, 243, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(33, 150, 243, 0.3)',
                          },
                        }}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.icon}
                      </IconButton>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: '#fff', fontWeight: 600 }}
                      >
                        {info.title}
                      </Typography>
                      <Link
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#fff',
                          },
                        }}
                      >
                        <Typography variant="body1">{info.value}</Typography>
                      </Link>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box
            sx={{
              mt: 8,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <LocationOnIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Based in Mumbai, India
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 