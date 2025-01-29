import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        padding: 2,
        height: 'auto',
        textAlign: 'center',
        marginTop: 'auto', 
      }}
    >
      {/* Copyright Information */}
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        &copy; {new Date().getFullYear()} Sandesh Khatiwada. All rights reserved.
      </Typography>

      {/* Social Media Links */}
      <Box>
        <IconButton
          href="https://www.linkedin.com/in/the-mayguy/" 
          target="_blank"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/sandesh-khatiwada" 
          target="_blank"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/san.desh.3557/" 
          target="_blank"
          color="inherit"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/the_mayguy/" 
          target="_blank"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://hashnode.com/@theMayGuy" 
          target="_blank"
          color="inherit"
        >
          <FaHashnode />
        </IconButton>
      </Box>

      {/* Icon Attribution */}
      <Typography
        variant="body2"
        sx={{
          marginTop: 2,
          fontSize: '0.75rem',
          color: 'text.secondary',
        }}
      >
        Icons created by <a href="https://www.flaticon.com" title="icons" style={{ textDecoration: 'none', color: 'inherit' }}>Freepik</a> - Flaticon
      </Typography>
    </Box>
  );
};

export default Footer;
