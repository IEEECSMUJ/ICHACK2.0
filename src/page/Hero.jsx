import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/ichack logo.png";
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
            {/* <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Besnik Agency
            </Typography> */}
            <Title variant="h1">
            IC HACK’22
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              IEEE India Council Hack’22 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast. Our 48-hour event will assist the participants in creating a coding solution to the problem statement, which is given on-spot to the participants. It aims to be an all-inclusive event that allows participants to express their creativity and eliminate the social obstacles surrounding programming. They need to show their managerial skills, teamwork, and the witty tactics they will implement to solve the problem. The Hackathon will offer a competitive environment focused on increasing diversity in the field of computer science. We want to inspire students from around India and beyond to enter the field of computer science, where their basic ideas may become the industry-level solution in future. We are trying to imbibe industry exposure to the participants, which will help them in the long run also want to spread the idea that programming is a useful skill that anyone can enjoy.
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
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
