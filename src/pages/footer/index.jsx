import { Box, Typography, InputBase, Button } from "@mui/material";
import React from "react";
import Logo from "../../compenets/nav/Logo"; // Fixed typo in the import path
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundImage: "url(./footer.jpg)",
                backgroundSize: "cover",
                color: "wheat",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                p: 4,
                fontWeight: 700,
            }}
        >
            {/* Logo Section */}
            <Box sx={{ display: "flex", justifyContent: "left", width: "100%" }}>
                <Logo />
            </Box>

            {/* Footer Content */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexWrap: "wrap",
                    gap: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
            >

                <Box sx={{ flex: 1, minWidth: "200px", gap: 4 }}>
                    <Typography variant="h6" sx={{ color: "yellow", fontWeight: "bold" }}>
                        <AddLocationIcon />
                        Address
                    </Typography>
                    {['6391 Elgin St. CelinaDelaware 10299', 'Warehousing'].map((item) => (
                        <Typography key={item} variant="body2" sx={{ color: "white" }}>
                            {item}
                        </Typography>
                    ))}
                </Box>

                {/* Column 1: Services */}
                <Box sx={{ flex: 1, minWidth: "200px", gap: 4 }}>
                    <Typography variant="h6" sx={{ color: "yellow", fontWeight: "bold" }}>
                        Services
                    </Typography>
                    {['Transportation', 'Warehousing', 'Fulfillment', 'Reverse logistics'].map((item) => (
                        <Typography key={item} variant="body2" sx={{ color: "white" }}>
                            {item}
                        </Typography>
                    ))}
                </Box>

                {/* Column 2: Links */}
                <Box sx={{ flex: 1, minWidth: "200px", gap: 4 }}>
                    <Typography variant="h6" sx={{ color: "yellow", fontWeight: "bold" }}>
                        Links
                    </Typography>
                    {['About Us', 'Latest Service'].map((item) => (
                        <Typography key={item} variant="body2" sx={{ color: "white" }}>
                            {item}
                        </Typography>
                    ))}
                </Box>

                {/* Column 3: Newsletter */}
                <Box sx={{ flex: 1, minWidth: "200px", gap: 4 }}>
                    <Typography variant="h6" sx={{ color: "yellow", fontWeight: "bold" }}>
                        Our Newsletter
                    </Typography>
                    <Box sx={{ gap: 4 }}>
                        <InputBase
                            placeholder="Your E-mail"
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                padding: "12px 16px",
                                width: "100%",
                                fontSize: "0.9rem",
                                color: "black",
                                marginBottom: 2,
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#C7CB36",
                                color: "black",
                                "&:hover": { backgroundColor: "#b1b52e" },
                                textTransform: "none",
                                borderRadius: "8px",
                                width: "100%",
                                padding: "12px 0",
                                fontWeight: "bold",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Footer Bottom */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    borderTop: "1px solid white",
                    paddingTop: "16px",
                    marginTop: "32px",
                }}
            >
                <Typography variant="body2" sx={{ color: "white", opacity: 0.7 }}>
                    © Express Syria 2025 | All Rights Reserved
                </Typography>
                <Box sx={{ display: "flex", gap: 8 }}>
                    {["Terms & Conditions", "Privacy Policy", "Contact Us"].map((item, idx) => (
                        <Typography
                            key={idx}
                            component="a"
                            href="#"
                            variant="body2"
                            sx={{
                                color: "white",
                                "&:hover": { color: "yellow" },
                                textDecoration: "none",
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
