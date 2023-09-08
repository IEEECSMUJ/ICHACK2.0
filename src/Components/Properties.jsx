import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const HouseContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: "300px",
    transition: "background-color 0.3s, transform 0.3s",
    "&:hover": {
      backgroundColor: "#F0F0F0",
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#ffffff", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Featured Properties
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {properties.map((property) => (
            <HouseContainer key={property.id}>
              <House
                img={property.img}
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space}
              />
            </HouseContainer>
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
