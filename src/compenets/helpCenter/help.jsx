import { Box, Typography } from "@mui/material";
import React from "react";

export default function HelpCenter() {
    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h2" sx={{ color: "#013B4F", marginBottom: 2 }}>
                Our team is always here to help you
            </Typography>
            <Typography variant="h4" sx={{ color: "#555" }}>
                We are here 24 hours for your questions.<br />
                Our motto is speed, reliability, and safety.
            </Typography>
        </Box>
    );
}
