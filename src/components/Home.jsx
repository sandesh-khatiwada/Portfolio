import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profileImage.png'; 

const Home = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }, // Fade-in animation over 1.5 seconds
  };

  return (
    <Container
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80vh',
        flexDirection: { xs: 'column', sm: 'row' },
        marginTop: { xs: 4, sm: 0 }, 
      }}
    >
      {/* Left side: Profile Image with animation */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Profile"
          sx={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            marginTop: '50px',
            animation: 'moveTop 3s ease-in-out infinite', // Horizontal movement animation
          }}
        />
      </Box>

      {/* Right side: Text */}
      <Box
        sx={{
          flex: 1,
          paddingLeft: 1,
          textAlign: { xs: 'center', sm: 'left' }, // Center-align text on mobile for better layout
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Programmer, Software Engineering Enthusiast, and a Learner
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: 'text.secondary' }}>
          - Crafting code that dances to its own beat - sometimes quirky, always satisfying!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
