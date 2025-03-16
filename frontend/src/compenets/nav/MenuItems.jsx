import React from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import PATH from '../../PATH_APP';

const dropdownItems = {
  Pages: ['About', 'Our Team', 'Pricing Plans', 'FAQ'],
  Services: ['Service', 'Service Details'],
  Projects: ['Projects', 'Projects Detail'],
};

const directLinks = {
  Home: PATH.home,
  'Contact Us': PATH.ContactUs,
  'Log in': PATH.Login,
};

const MenuItems = ({ pages }) => (
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      gap: 3,
      fontFamily: 'roboto',
    }}
  >
    {pages.map((page) => (
      <Box
        key={page}
        sx={{
          position: 'relative',
          '&:hover .dropdown': {
            opacity: 1,
            visibility: 'visible',
            transform: 'translateY(0)',
          },
        }}
      >
        {directLinks[page] ? (
          <Button
            component={Link}
            to={directLinks[page]}
            sx={{
              color: '#333333',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: '#555555', background: 'transparent' },
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '14px',
            }}
          >
            {page}
          </Button>
        ) : (
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: '#333333',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: '#555555', background: 'transparent' },
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '14px',
            }}
          >
            {page}
          </Button>
        )}

        {/* Dropdown menus if exists */}
        {dropdownItems[page] && <DropdownMenu items={dropdownItems[page]} />}
      </Box>
    ))}
  </Box>
);

export default MenuItems;
