import React, { useState } from 'react';
import styled from 'styled-components';
import ys_logo from '../image/header/ys_header_logo.png';
import { Grid, Text } from '../elements';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Header = (props) => {
  return (
    <Nav>
      <div className="logo">
        <Grid flex align="center">
          <Link to="/">
            <LogoImage src={ys_logo} />
          </Link>
          <Link to="/">
            <Text bold italic size="35px" color="#fff" margin="0 0 0 1.5rem">
              Welcome to YS Lounge
            </Text>
          </Link>
        </Grid>
      </div>
      <Burger />
    </Nav>
  );
};

const LogoImage = styled.img`
  display: block;
  width: 150px;
  border: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  width: 100%;
  height: 12vh;
  border-bottom: 2px solid #888;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.9);

  .logo {
    padding: 15px 30px;
    display: flex;
  }
`;

export default Header;
