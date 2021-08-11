import React from "react";
import styled from "styled-components";
import falcom from "../image/header/logo-falcom.svg";
import { Grid, Text } from "../elements";

const Header = (props) => {
  return (
    <Grid row_flex height="10vh" padding="1.5rem 0 1.5rem 2.5rem" margin="0 0 3rem 0" bg="#000">
      <Grid header_flex padding="0 0 0 2.5rem">
        <LogoImage src={falcom} />
        <Text bold italic size="30" color="#fff" margin="0 0 0 2rem">
          Welcome to YS World!
        </Text>
      </Grid>
      {/* <div>햄버거 메뉴버튼</div> */}
    </Grid>
  );
};

const LogoImage = styled.img`
  display: block;
  width: 90px;
  border: none;
`;

export default Header;
