import React from "react";
import styled from "styled-components";
import nisa from "../image/header/logo-nisa.svg";

const Footer = (props) => {
  return (
    <FooterBlock>
      <LogoImage src={nisa} />
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 1rem 0 1rem 2rem;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const LogoImage = styled.img`
  display: block;
  width: 80px;
  border: none;
`;

export default Footer;
