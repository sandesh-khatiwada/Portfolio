import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null);  // Reset error when user changes input
    setSuccessMessage(''); // Reset success message when user changes input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.message) {
      setError('Name and Message are required!');
      return;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email!');
      return;
    }

    // Prepare the data to send to EmailJS
    const data = {
      service_id: 'service_vqhol6i',  
      template_id: 'template_bdp0n3s', 
      user_id: 'famMfL0DKUDb6d0kT', 
      template_params: {
        username: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };

    // Send email using Axios
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setSuccessMessage("Message sent successfully. I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setError('Failed to send the message, please try again later.');
        console.error('Error sending email:', error);
      });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
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
        minHeight: '50vh',
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
        Contact Me
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ maxWidth: 500, margin: '0 auto' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            name="name"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            name="message"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            }}
          />
          
          {/* Displaying success or error message */}
          {error && (
            <Typography variant="body2" color="error" sx={{ textAlign: 'right' }}>
              {error}
            </Typography>
          )}
          {successMessage && (
            <Typography variant="body2" color="success.main" sx={{ textAlign: 'right' }}>
              {successMessage}
            </Typography>
          )}
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              backgroundColor: '#102E4A',
              '&:hover': {
                backgroundColor: '#1d4d7f',
              },
            }}
          >
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
