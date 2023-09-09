import { Box, Typography, Container } from "@mui/material";
import React from "react";
import Navbar from "./navbar";
import heroImg from "../media/ichack logo.png";
import CustomButton from "./CustomButton";
import ieeecouncillogo from "../media/ieeecouncilremovedbg.png";
import sblogo from "../media/ieee sb logo.png"
import ieee from "../media/IEEEREMOVEBG.png"

const Hero = () => {
  return (
    <>
      {/* Section 1 */}
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          <Navbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: (theme) => theme.spacing(5),
              marginTop: (theme) => theme.spacing(3),
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Content for Section 1 */}
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                {/* Welcome to Besnik Agency */}
              </Typography>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: "64px",
                  color: "#000336",
                  fontWeight: "bold",
                  margin: "32px 0 32px 0",
                  "@media (max-width: 600px)": {
                    fontSize: "40px",
                  },
                }}
              >
                IC HACK’22
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                IEEE India Council Hack’22 is the student-run Hackathon, with its prime motive to provide a recognised platform to every tech enthusiast. Our 48-hour event will assist the participants in creating a coding solution to the problem statement, which is given on-spot to the participants. It aims to be an all-inclusive event that allows participants to express their creativity and eliminate the social obstacles surrounding programming. They need to show their managerial skills, teamwork, and the witty tactics they will implement to solve the problem. The Hackathon will offer a competitive environment focused on increasing diversity in the field of computer science. We want to inspire students from around India and beyond to enter the field of computer science, where their basic ideas may become the industry-level solution in future. We are trying to imbibe industry exposure to the participants, which will help them in the long run also want to spread the idea that programming is a useful skill that anyone can enjoy.
              </Typography>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Box>

            <Box sx={{ flex: "1.20" }}>
              <img
                src={heroImg}
                alt="heroImg"
                style={{ maxWidth: "100%", marginBottom: "2rem", marginTop:"15rem" , minHeight:"100vh"}}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          {/* <Navbar /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: (theme) => theme.spacing(5),
              marginTop: (theme) => theme.spacing(0),
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Content for Section 2 */}
            <Box sx={{ flex: "1" }}>
              {/* Your content for Section 2 goes here */}

              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                {/* Welcome to Besnik Agency */}
              </Typography>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: "64px",
                  color: "#000336",
                  fontWeight: "bold",
                  margin: "32px 0 32px 0",
                  "@media (max-width: 600px)": {
                    fontSize: "40px",
                  },
                }}
              >
               IEEE India Council
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                IEEE India Council is the umbrella organization that coordinates IEEE activities in India. India Council comes under IEEE Region 10, i.e., Asia Pacific region of IEEE, and has over 50,000 members spread across 1000 student branches. IEEE India Council was established on 20th May 1976 and is one of the five councils in Asia Pacific.
              </Typography>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Box>

            <Box sx={{ flex: "1.20" }}>
              {/* Your image for Section 2 goes here */}
              <img
                src={ieeecouncillogo }
                alt="ieeecouncillogo "
                style={{ maxWidth: "100%", marginBottom: "2rem", marginTop:"10rem" ,minHeight:"160vh"}}
              />
            </Box>
          </Box>
        </Container>
      </Box>


      {/* Section 3 */}
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          {/* <Navbar /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: (theme) => theme.spacing(5),
              marginTop: (theme) => theme.spacing(0),
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Content for Section 2 */}
            <Box sx={{ flex: "1" }}>
              {/* Your content for Section 2 goes here */}

              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                {/* Welcome to Besnik Agency */}
              </Typography>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: "64px",
                  color: "#000336",
                  fontWeight: "bold",
                  margin: "32px 0 32px 0",
                  "@media (max-width: 600px)": {
                    fontSize: "40px",
                  },
                }}
              >
               IEEE 
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE aims to recognize the contributions of technical communities and technical professionals in improving global conditions. IEEE and its members inspire a global community through highly cited publications, conferences, technology standards, and professional and educational activities.
              </Typography>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Box>

            <Box sx={{ flex: "1.20" }}>
              {/* Your image for Section 3 goes here */}
              <img
                src={ieee }
                alt="iieee "
                style={{ maxWidth: "100%", marginBottom: "2rem", marginTop: "6rem" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

{/* SECTION 4 */}



<Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          {/* <Navbar /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: (theme) => theme.spacing(5),
              marginTop: (theme) => theme.spacing(0),
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Content for Section 2 */}
            <Box sx={{ flex: "1" }}>
              {/* Your content for Section 2 goes here */}

              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                {/* Welcome to Besnik Agency */}
              </Typography>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: "64px",
                  color: "#000336",
                  fontWeight: "bold",
                  margin: "32px 0 32px 0",
                  "@media (max-width: 600px)": {
                    fontSize: "40px",
                  },
                }}
              >
               IEEE SB 
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
               IEEE Student Branch, Manipal University Jaipur, strives to create and spread awareness of the various technologies that surround us, promote research among students, and recognize technological excellence. We have grown into a multi-faceted chapter, embodying IEEE Computer Society MUJ, IEEE Antennas and Propagation Society MUJ, IEEE Microwave Theory and Techniques Society MUJ and IEEE Women in Engineering Affinity Group MUJ. We share a common goal of empowering young engineers to enhance their skills and set up milestones. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
              </Typography>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Box>

            <Box sx={{ flex: "1.20" }}>
              {/* Your image for Section 4goes here */}
              <img
                src={sblogo }
                alt="sblogo "
                style={{ maxWidth: "100%", marginBottom: "2rem", marginTop:"10rem" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
