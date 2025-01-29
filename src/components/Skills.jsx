import React from 'react';
import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaJs, FaNodeJs, FaReact, FaDatabase, FaPython } from 'react-icons/fa'; // Import icons from react-icons

const skills = [
  {
    name: 'JavaScript',
    description:
      'Developed dynamic and responsive user interfaces, implemented client-side validation, worked with APIs and a lot more. JavaScript, coupled with frameworks like React.js and Node.js, has enabled me to build robust and scalable applications.',
    icon: <FaJs size={24} color="#f7df1e" />, // Icon for JavaScript
  },
  {
    name: 'Node.js and Express.js',
    description:
      'Built REST APIs using NodeJS as a backend runtime and ExpressJS as a framework. Explored the fundamentals like routing, implemented middlewares, authentication, database interaction, and built more robust and sophisticated applications.',
    icon: <FaNodeJs size={24} color="#68A063" />, // Icon for Node.js
  },
  {
    name: 'React',
    description: 'Developed dynamic and interactive user interfaces,created seamless and scalable web applications that deliver great user experiences.',
    icon: <FaReact size={24} color="#61DBFB" />, // Icon for React
  },
  {
    name: 'SQL',
    description:
      'Designed database schemas, created complex queries to retrieve and manipulate data, and optimized database performance. Also worked with SQL ORMs such as Sequelize in my projects.',
    icon: <FaDatabase size={24} color="#f29111" />, // Icon for SQL
  },
  {
    name: 'MongoDB',
    description:
      'Designed document-oriented database schemas, performed CRUD operations, and utilized features like aggregation pipelines and indexes to optimize query performance. As an intermediate-level MongoDB user, I\'ve integrated MongoDB with Node.js applications, implemented data replication and sharding strategies, and leveraged its scalability for projects requiring high availability and scalability.',
    icon: <FaDatabase size={24} color="#4DB33D" />, // Icon for MongoDB
  },
  {
    name: 'Python',
    description:
      'Worked with Python to develop small GUI projects, 2-D games, and explored things like automation.',
    icon: <FaPython size={24} color="#3776AB" />, // Icon for Python
  },
];

const Skills = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const skillItemVariants = {
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
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={8}
            md={6}
            mb={6}
            lg={4}
            component={motion.div}
            variants={skillItemVariants}
          >
            <Paper
              sx={{
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: '#102E4A',
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease', 
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: 6, 
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                {skill.icon}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  {skill.name}
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 2,
                  color: 'white',
                  flexGrow: 1,
                }}
              >
                {skill.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
