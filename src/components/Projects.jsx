import React from 'react';
import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaPhp, FaPython } from 'react-icons/fa';
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import RojgarNepal from "../assets/rojgarnepal.png";
import KothaChaiyo from "../assets/kothachaiyo.png";
import WeatherForecaster from "../assets/weatherforecaster.png";
import KitchenKourier from "../assets/kitchenkourier.png";
import SubscriberCounter from "../assets/subscribercounter.png";

// Project data
const projects = [
  {
    name: 'RojgarNepal',
    description:
      'RojgarNepal is a comprehensive platform designed to connect freelancers with clients, enabling seamless job postings, applications, and communication.',
    techStack: [<FaReact size={20} color="#61DBFB" />, <DiNodejs size={30} color="#68A063" />,<SiExpress size={20} color="#4DB33D" />, <SiMysql size={20} color="#f29111" />,],
    image: RojgarNepal,
    repo: 'https://github.com/sandesh-khatiwada/RojgarNepal',
  },
  {
    name: 'KothaChaiyo',
    description:
      'KothaChaiyo is a web-based accommodation finder application. It helps landlords post their properties on rent and tenants can view details and contact the landlords.',
    techStack: [<FaCss3Alt size={20} color="#1572B6" />, <FaPhp size={20} color="#777BB4" />, <SiMysql size={20} color="#f29111" />],
    image: KothaChaiyo,
    repo: 'https://github.com/KothaChaiyo/KothaChaiyo',
  },
  {
    name: 'WeatherForecaster',
    description:
      'CLI-based Weather Forecaster that fetches weather data of the provided location from the API and displays it in the terminal.',
    techStack: [<FaPython size={20} color="#3776AB" />],
    image: WeatherForecaster,
    repo: 'https://github.com/sandesh-theMayGuy/Weather-Forecaster---CLI',
  },
  {
    name: 'KitchenKourier',
    description:
      'KitchenKourier is a lunch delivery platform made as a college project for the course Web Technology (WT).',
    techStack: [<FaCss3Alt size={20} color="#1572B6" />, <FaPhp size={20} color="#777BB4" />, <SiMysql size={20} color="#f29111" />],
    image:KitchenKourier,
    repo: 'https://github.com/sandesh-theMayGuy/KitchenKourier-Web-Project-for-College',
  },
  {
    name: 'Youtube Subscriber Counter',
    description:
      'CLI based Subscriber Counter that uses Youtube data API to fetch the number of subscribers for the provided youtube channel.',
    techStack: [<FaPython size={20} color="#3776AB" />],
    image: SubscriberCounter,
    repo: 'https://github.com/sandesh-theMayGuy/Youtube-Subscribers-Counter-in-Python-CLI-program-',
  },
];

const Projects = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const projectItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
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
        backgroundColor: '#f5f5f5',
        minHeight: '80vh',
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
        Projects
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            key={index}
            item
            xs={12} // Full width on mobile
            sm={6}  // Half width on small screens
            md={4}  // One-third width on medium screens
            component={motion.div}
            variants={projectItemVariants}
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
          >
            <Paper
              sx={{
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: '#102E4A',
                textAlign: 'left',
                flexGrow: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor:'pointer',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease', 
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: 6,
      
                },
              }}
              onClick={() => window.open(project.repo, '_blank')}
            >
              <img
                src={project.image} 
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100px', 
                  objectFit: 'contain',
                  borderRadius: '8px',  
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', marginTop: 2 }}>
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', marginTop: 1 }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', marginTop: 1, fontWeight: 'bold' }}>
                Tech Stack:
              </Typography>
              <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
                {project.techStack.map((tech, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    {tech}
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
