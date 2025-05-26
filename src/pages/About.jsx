import { Container, Typography, Box, Grid, Paper, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    Languages: ['Python', 'Java', 'C', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
    Frameworks: ['React', 'Node.js', 'Flutter'],
    Tools: [
      'Kali Linux',
      'Wireshark',
      'Nmap',
      'Burp Suite',
      'Splunk',
      'Chronicle',
      'MySQL',
      'PostgreSQL',
      'Excel',
      'Tableau',
      'Jupyter',
      'Google Colab',
      'AutoAI',
      'Firebase',
    ],
  };

  const certifications = [
    {
      name: 'Google Cybersecurity',
      url: 'https://coursera.org/share/d8e94e1cc78c52bcae69d91d8260c709'
    },
    {
      name: 'IIM Mumbai Business Management [Transfer Credit Course: 4 Credits] - 96/100',
      url: null
    },
    {
      name: 'AWS Cloud Architecting',
      url: 'https://www.credly.com/badges/8502adfb-149b-48d2-8563-f08e924c8e25/public_url'
    },
    {
      name: 'Cisco Introduction to Cybersecurity',
      url: 'https://www.credly.com/badges/3350bda4-5aa3-4625-8437-c43bd27d8382/public_url'
    },
    {
      name: 'ISRO (IIRS,DEHRADUN): Geo-Data Sharing and Cyber Security',
      url: '/certificate_iirsisro_cyber.pdf'
    },
    {
      name: 'ISRO (IIRS,DEHRADUN): Geo-Data Processing Using Python and Machine Learning',
      url: '/certificate_iirsisro_python.pdf'
    },
  ];

  const experiences = [
    {
      title: 'Cybersecurity Intern at Cloud Counselage',
      period: 'January 2025 - April 2025',
      description: [
        'Performed security audits and vulnerability assessments for client websites',
        'Delivered comprehensive security reports with actionable recommendations',
      ],
    },
    {
      title: 'Tata Cybersecurity Security Analyst Simulation (Forage)',
      period: 'January 2025',
      description: [
        'Specialized in Identity and Access Management (IAM) implementation',
        'Developed security strategies aligned with business objectives',
      ],
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
            About Me
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
            Electronics and Computer Science Student at Vidyalankar Institute of Technology
          </Typography>

          {/* Skills Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: '#fff', mb: 4 }}
            >
              Skills
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(skills).map(([category, items]) => (
                <Grid item xs={12} md={4} key={category}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: '#fff', mb: 2 }}
                      >
                        {category}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {items.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            color="primary"
                            variant="outlined"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: '#fff',
                              '&:hover': {
                                borderColor: '#2196f3',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Experience Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: '#fff', mb: 4 }}
            >
              Experience
            </Typography>
            <Grid container spacing={3}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: '#fff', mb: 1 }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}
                      >
                        {exp.period}
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                        {exp.description.map((item, i) => (
                          <li key={i}>
                            <Typography
                              variant="body1"
                              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: '#fff', mb: 4 }}
            >
              Certifications
            </Typography>
            <Grid container spacing={2}>
              {certifications.map((cert, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                        cursor: cert.url ? 'pointer' : 'default',
                      }}
                      onClick={() => cert.url && window.open(cert.url, '_blank')}
                    >
                      <Typography
                        variant="body1"
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': {
                            color: cert.url ? '#fff' : 'rgba(255, 255, 255, 0.8)',
                          }
                        }}
                      >
                        {cert.name}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 