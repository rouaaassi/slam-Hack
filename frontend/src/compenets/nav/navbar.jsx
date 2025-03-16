import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItemText, ListItemButton } from '@mui/material';
import Logo from './Logo';
import MenuItems from './MenuItems';
import ChatSection from './ChatSection';

const pages = ['Home', 'Pages', 'Services', 'Projects', 'Contact Us', 'Log in'];

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Box position="static" sx={{ mt: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Logo />

          <MenuItems pages={pages} />

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton onClick={toggleDrawer} sx={{ color: '#333' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={openMenu} onClose={toggleDrawer}>
              <List sx={{ width: 250 }}>
                {pages.map((page) => (
                  <ListItemButton key={page} onClick={toggleDrawer}>
                    <ListItemText primary={page} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Box>

          <ChatSection />
          
        </Toolbar>
      </Container>
    </Box>
  );
};

export default NavBar;
