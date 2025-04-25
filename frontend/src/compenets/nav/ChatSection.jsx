import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PATH from '../../PATH_APP';

const ChatSection = () => (
  <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2, fontSize: 60,
  transition: '0.5s',
  transform: 'scale(0.9)',
  filter: 'drop-shadow(0px 0px 10px #C7CB36)',
  color: 'white',
  cursor:"pointer",
  "&:hover": {
    transform: 'scale(1)',
    filter: 'drop-shadow(0px 0px 30px rgb(96, 99, 10))',
  }, }}>
    <Link to={PATH.chatAi}>
    <img src="/chat.png" alt="Chat" style={{ width: '60px', height: '60px' ,color:'#C7CB36'}} />
    </Link>
    <Box sx={{ textAlign: 'right' }}>
      <Typography variant="body2" sx={{ color: '#666666', fontWeight: 'bold', mr:10 }}>
        Need help?
      </Typography>
      <Typography variant="body2" sx={{ color: '#666666',mr:6 }}>
       Talk to our chat AI
      </Typography>
    </Box>
  </Box>
);

export default ChatSection;