import React, { useState } from "react";
import styled from "styled-components";
import falcom from "../image/header/logo-falcom.svg";
import { Grid, Text, Button } from "../elements";
import { FaBars } from "react-icons/fa";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

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
      <MenuBtn onClick={toggleMenu}>
        <FaBars size="24" color="#fff" />
      </MenuBtn>

      {open ? (
        <ShowMenu open={open}>
          <MenuLi>
            <Button width="100%" bg="#fff">
              이스 히스토리
            </Button>
          </MenuLi>
        </ShowMenu>
      ) : (
        ""
      )}
    </Grid>
  );
};

const LogoImage = styled.img`
  display: block;
  width: 90px;
  border: none;
  cursor: pointer;
`;

// 햄버거 바
const MenuBtn = styled.button`
  position: relative;
  width: 80px;
  height: 24px;
  border-radius: 0.5rem;
  color: #000;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const ShowMenu = styled.ul`
  position: absolute;
  top: -20px;
  right: 0;
  width: 200px;
  height: 70vh;
  background: #eee;
  z-index: 10;
  transition: right 1000s ease-in-out;
`;

const MenuLi = styled.li`
  width: 100%;
  height: 24px;
  border-bottom: 1px solid #888;
  list-style: none;
`;

export default Header;
