import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MovieIcon from '@mui/icons-material/Movie';
import CasinoIcon from '@mui/icons-material/Casino';

const Projects = () => {
  const projects = [
    {
      name: 'Resino Box',
      description: 'A responsive e-commerce website for handcrafted jewelry, featuring a clean and modern design with smooth user interactions.',
      link: 'https://resinobox.vercel.app/',
      icon: <ShoppingCartIcon />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    },
    {
      name: 'Movie Recommender System',
      description: 'An intelligent movie recommendation system that suggests films based on user preferences and viewing history.',
      link: 'https://movie-recommender-pgt.streamlit.app/',
      icon: <MovieIcon />,
      technologies: ['Python', 'Streamlit', 'Machine Learning'],
    },
    {
      name: 'Monty Hall Simulator',
      description: 'An interactive simulation of the famous Monty Hall probability puzzle, demonstrating the counterintuitive nature of probability.',
      link: '#', // To be updated later
      icon: <CasinoIcon />,
      technologies: ['Python', 'Streamlit', 'Statistics'],
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
            Featured Projects
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
            A showcase of my best work and contributions
          </Typography>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} md={4} key={project.name}>
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
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
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          {project.icon}
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ color: '#fff', fontWeight: 600 }}
                          >
                            {project.name}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}
                        >
                          {project.description}
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                background: 'rgba(33, 150, 243, 0.2)',
                                color: '#fff',
                                border: '1px solid rgba(33, 150, 243, 0.3)',
                                '&:hover': {
                                  background: 'rgba(33, 150, 243, 0.3)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          size="small"
                          startIcon={<LanguageIcon />}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#fff',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            '&:hover': {
                              borderColor: '#fff',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                          variant="outlined"
                        >
                          View Project
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 