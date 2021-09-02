import React, { useState } from 'react';
import styled from 'styled-components';
import ys_logo from '../image/header/ys_header_logo.png';
import { Grid, Text } from '../elements';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Header = (props) => {
  return (
    <>
      <Nav>
        <div className="logo">
          <Grid flex align="center">
            <Link to="/">
              <LogoImage src={ys_logo} />
            </Link>
            <Link to="/">
              <Text bold italic size="35px" color="#fff" margin="0 0 0 1.2rem">
                Welcome to YS Lounge
              </Text>
            </Link>
          </Grid>
        </div>
        <Burger />
      </Nav>
      <Spacer />
    </>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.9);

  .logo {
    padding: 15px 30px;
    display: flex;
  }
`;

const LogoImage = styled.img`
  display: block;
  width: 120px;
  border: none;
  cursor: pointer;
`;

// 헤더를 fixed로 설정하면 헤더 하단에 나오는 콘텐츠가 헤더의 위치가 겹치는 것 방지
const Spacer = styled.div`
  height: 3rem;
`;

export default Header;
