import React from "react";
import styled from "styled-components";
import falcom from "../image/header/logo-falcom.svg";
import { Grid, Text } from "../elements";
import { FaBars } from "react-icons/fa";

const Header = (props) => {
  return (
    <Grid flex between height="12vh" padding="1.5rem 0 1.5rem 2.5rem" margin="0 0 3rem 0" bg="#000">
      {/* 로고 + Title */}
      <Grid flex alignCenter padding="0 0 0 2.5rem">
        <LogoImage src={falcom} />
        <Text bold italic size="35px" color="#fff" margin="0 0 0 2rem">
          Welcome to YS Lounge
        </Text>
      </Grid>

      {/* 메뉴 버튼 */}
      <MenuBtn>
        <FaBars size="24" color="#fff" />
      </MenuBtn>
    </Grid>
  );
};

const LogoImage = styled.img`
  display: block;
  width: 90px;
  border: none;
  cursor: pointer;
`;

const MenuBtn = styled.button`
  width: 80px;
  height: 24px;
  border-radius: 0.5rem;
  color: #000;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export default Header;
