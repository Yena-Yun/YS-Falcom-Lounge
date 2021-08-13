import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Text, Button, Input, Image } from "../elements";
import goddesses from "../image/etc/ys-goddesses.jpg";
import adol_dana from "../image/etc/ys8-adol-dana.jpg";

const Home = () => {
  return (
    <Grid>
      <Header />

      <Grid flex column justifyCenter alignCenter>
        <Image src={goddesses} size="400" shape="rectangle" />
        <Text bold italic size="60px">
          35-year Anniversary!
        </Text>

        <Grid flex justifyCenter>
          <Button>
            <Text color="#fff">이스 히스토리</Text>
          </Button>
          <Button>
            <Text color="#fff">이스 공식 홈페이지</Text>
          </Button>
        </Grid>

        <Image src={adol_dana} size="400" shape="rectangle" />
        <Text bold italic size="60px">
          The Best Game Ever
        </Text>

        <Grid flex justifyCenter>
          <Button>
            <Text color="#fff">이스 8 소개</Text>
          </Button>
        </Grid>
      </Grid>

      <Footer />
    </Grid>
  );
};

export default Home;
