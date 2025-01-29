import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import codingGIF from "../assets/coding.gif";

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      sx={{
        paddingY: 5,
        paddingX: { xs: 2, sm: 5 },
        textAlign: 'center',
        minHeight: '30vh',
        width: '80%', 
        margin: '0 auto', 
      }}
    >

      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: 3,
          color: 'text.primary',
        }}
      >
        About 
      </Typography>


            <img
        src={codingGIF}
        alt="Coding Gif"
        style={{
          width: '100px', 
          height: 'auto',
          marginBottom: '20px', 
        }}
      />


      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          color: 'text.primary',
          textAlign: 'left',
          marginBottom: 3,
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Hi there! 👋 I'm Sandesh, an enthusiastic Computer Science student from Nepal with passion for Programming and Software Engineering.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          I primarily work with JavaScript but also proficient in languages like Python, PHP, C, and C++. I have worked with NodeJS, ExpressJS, React, familiar with SQL and NoSQL databases, and worked with various ORMs such as Sequelize, Mongoose etc.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          I use git for version control, Linux as my primary Operating System and love contributing to Open Source.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Outside of coding, I enjoy travelling, watching movies and reading books.
        </Typography>
      </Paper>

      <Button
  variant="contained"
  color="primary"
  href="/SandeshKhatiwada.pdf" 
  download="SandeshKhatiwada" 
  sx={{
    paddingX: 3,
    paddingY: 1.5,
    fontSize: 16,
    borderRadius: 2,
    boxShadow: 3,
    color: 'white',
    marginTop: 2,
    backgroundColor: '#102E4A',
    '&:hover': {
      backgroundColor: '#1d4d7f',
    },
  }}
  startIcon={<DownloadIcon />}
>
  View CV
</Button>
    </Box>
  );
};

export default About;
