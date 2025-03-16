import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        background: '#013B4F',
        width: '100%',
        height: '100vh',
        color: 'white',
        paddingBottom: 10,
        paddingLeft: 15
      }}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Box>
          <Box sx={{ paddingBottom: 7 }}>
            <Typography variant="body1" sx={{ color: '#C7CB36' }}>
              Innovation at Work
            </Typography>
            <Typography variant="h2" sx={{ lineHeight: 1.2 }}>
              Fast Furious <br />
              <Typography variant="h2" sx={{ color: "#C7CB36", display: 'inline' }}>
                Transport All of<br />
              </Typography>
              The Logistics
            </Typography>
          </Box>
          <Typography sx={{ marginBottom: 2 }}>
            We have been operating for over a decade, providing top-notch<br />
            services to our clients and building a strong track record
          </Typography>

          <Box sx={{ display: 'flex', paddingTop: 4, gap: 4, alignItems: 'center' }}>
            <Button
              sx={{
                display: "flex",
                background: '#C7CB36',
                color: '#001327',
                fontFamily: 'inherit',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '20px',
                letterSpacing: '1.2px',
                padding: "18px 30px",
                border: "1px solid #C7CB36",
                textAlign: 'center',
                verticalAlign: 'middle',
                borderRadius: "5px",
                cursor: "pointer",
                transition: '0.3s',
                "&:hover": {
                  background: 'white',
                  color: '#C7CB36',
                  border: '1px solid #C7CB36',
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              All Projects
            </Button>

            <a
              href="https://youtu.be/B1ukLo7Lo3Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Box sx={{ display: "flex", alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                <PlayCircleOutlinedIcon
                  sx={{
                    fontSize: 60,
                    transition: '0.3s',
                    transform: 'scale(1)',
                    filter: 'drop-shadow(0px 0px 10px #C7CB36)',
                    color: 'white',
                    "&:hover": {
                      transform: 'scale(1.4)',
                      filter: 'drop-shadow(0px 0px 10px #C7CB36)',
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontSize: '16px',
                    '&:hover': { color: '#C7CB36' }
                  }}
                >
                  See How It Works
                </Typography>
              </Box>
            </a>
          </Box>
        </Box>
      </motion.div>

      <motion.img
        src="/hero.png"
        alt="Hero section"
        style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      />
    </Box>
  );
}
