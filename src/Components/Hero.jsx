import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero-new-image-removebg-preview.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
                mx: 2,
              }}
            >
              Welcome to IC HACKS - 2023
            </Typography>
            <Title variant="h1">
             A hackathon where you'll love to compete.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
            Get a head start on the hottest hackathons before they go mainstream! 
            Access exclusive coding competitions with a single search
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Know More"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem", marginTop: "5rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
