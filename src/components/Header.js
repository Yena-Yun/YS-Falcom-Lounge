import React from "react";
import styled from "styled-components";
import falcom from "../image/header/logo-falcom.svg";
import { Grid, Text } from "../elements";

const Header = (props) => {
  return (
    <Grid flex between height="10vh" padding="1.5rem 0 1.5rem 2.5rem" margin="0 0 3rem 0" bg="#000">
      <Grid flex center padding="0 0 0 2.5rem">
        <LogoImage src={falcom} />
        <Text bold italic size="40px" color="#fff" margin="0 0 0 2rem">
          Welcome to YS Lounge
        </Text>
      </Grid>
      <Bar class="fas fa-bars"></Bar>
    </Grid>
  );
};

const LogoImage = styled.img`
  display: block;
  width: 90px;
  border: none;
  cursor: pointer;
`;

const Bar = styled.i`
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  margin-right: 30px;
`;

export default Header;
