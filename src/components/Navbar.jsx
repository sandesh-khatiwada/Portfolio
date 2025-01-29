import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from "../assets/mainLogo.png";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = ({ setActiveSection, activeSection }) => {
  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Skills', value: 'skills' },
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Breakpoint for medium screens and below

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Name */}
        <Box onClick={()=>{setActiveSection('home')}} sx={{ display: 'flex', alignItems: 'center' , cursor:'pointer' }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: 40,
              marginRight: 2,
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Sandesh Khatiwada
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.value}
                onClick={() => setActiveSection(item.value)}
                sx={{
                  color: activeSection === item.value ? 'primary.main' : 'text.primary',
                  fontWeight: activeSection === item.value ? 'bold' : 'normal',
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'background.paper',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.value}
                onClick={() => {
                  setActiveSection(item.value);
                  setDrawerOpen(false); // Close the drawer after selecting a section
                }}
                sx={{
                  backgroundColor: activeSection === item.value ? 'primary.light' : 'inherit',
                  '&:hover': { backgroundColor: 'primary.main', color: 'background.paper' },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
