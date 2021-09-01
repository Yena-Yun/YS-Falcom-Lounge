import React from 'react';
import styled from 'styled-components';
import nisa from '../image/header/logo-nisa.svg';
import falcom from '../image/header/logo-falcom.svg';

const Footer = (props) => {
  return (
    <FooterBlock>
      <LogoImage src={nisa} />
      <LogoImage src={falcom} />
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 1.8rem;
  font-size: 20px;
  font-weight: 600;
`;

const LogoImage = styled.img`
  display: block;
  width: 80px;
  border: none;

  & + & {
    margin-left: 20px;
  }
`;

export default Footer;
