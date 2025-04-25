import React, { useState } from 'react';
import { Box, Button, TextField, CircularProgress, Typography } from '@mui/material';
// import axios from 'axios';
import HelpCenter from '../../compenets/helpCenter/help';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "ai", content: "how can i help you!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;
//     const userMessage = { sender: "user", content: input.trim() };
//     setMessages([...messages, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const token = "YOUR_TOKEN_HERE";
//       const response = await axios.post("https://mockapi.io/clone/67d60a56286fdac89bc105c6", { message: input.trim() }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const aiMessage = { sender: "ai", content: response.data.reply };
//       setMessages((prev) => [...prev, aiMessage]);
//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [...prev, { sender: "ai", content: "something wrong, try again later" }]);
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: 3, display: 'flex', flexDirection: 'column', height: '80vh' }}>
        <HelpCenter />
      <Box sx={{ flex: 1, overflowY: 'auto', marginBottom: 2, padding: 2, border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
        {messages.map((msg, idx) => (
          <Box key={idx} sx={{
            display: 'flex',
            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            marginBottom: 1
          }}>
            <Typography sx={{
              padding: 1.5,
              background: msg.sender === 'user' ? '#C7CB36' : '#fff',
              color: msg.sender === 'user' ? '#001327' : '#000',
              borderRadius: '12px',
              maxWidth: '70%',
              wordBreak: 'break-word'
            }}>
              {msg.content}
            </Typography>
          </Box>
        ))}
        {loading && <CircularProgress size={24} />}
      </Box>
      
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="write your Question"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" sx={{ background: '#C7CB36', color: '#001327', "&:hover": {
          background: 'white',
          color: '#C7CB36',
          border: '1px solid #C7CB36',
          boxShadow: '0 0 30px 8px rgba(199, 203, 54, 0.8)',
          transform: 'scale(1.05)', 
        },
        "&:active": {
          transform: 'scale(0.98)',
        }, }}>
            {/* onClick={handleSend}*/}
          send
        </Button>
      </Box>
    </Box>
  );
}
