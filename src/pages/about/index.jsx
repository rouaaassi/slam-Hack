import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";


export default function AboutSection() {
  return (
    <Box
      sx={{
        background: "#dbdcdc",
        width: "100%",
        minHeight: { xs: "auto", md: "60vh" }, 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 10, lg: 15 },
        padding: { xs: 4, sm: 6, md: 10, lg: 14 }, 
        flexDirection: { xs: "column", md: "row" },
        
      }}
    >
      <motion.img
        src="/about1.png"
        alt="About section"
        style={{ borderRadius: '12px', width: '100%', maxWidth: '350px', height: 'auto', cursor:'pointer' }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      />

      <Box
        sx={{
          maxWidth: { xs: "100%", md: "600px" },
          color: "#2d3545",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: { xs: "center", md: "left" }, 
        }}
      >
        <Typography variant="body1" sx={{ color: "#2d3545", fontFamily: 'monospace', fontWeight: "bold" }}>
          ABOUT US
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}>
          Streamlined Solutions for <br /> Seamless Deliveries
        </Typography>

        <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum
          facilisis the sem. Imperdiet massa turpis sit. Lorem ipsum dolor sit amet.
        </Typography>
        <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body1">✔ Your satisfaction is our priority</Typography>
          <Typography variant="body1">✔ Enhancing your travel experience</Typography>
          <Typography variant="body1">✔ Safe, comfortable, and on time</Typography>
          <Typography variant="body1">✔ Discover the joy of free transportation</Typography>
        </Box>

        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 3,
            backgroundColor: "#C7CB36",
            color: "white",
            width: { xs: "100%", sm: "fit-content" },
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            '&:hover': {
              backgroundColor: '#b1b52e',
            },
            textTransform: "none",
            fontWeight: 'bold',
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
