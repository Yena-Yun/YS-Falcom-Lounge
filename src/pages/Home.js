/* eslint-disable */
import React from "react";
import { Grid, Text, Button, Input, Image } from "../elements";
import goddesses from "../image/etc/ys-goddesses.jpg";
import lacrimosa from "../image/ys8/ys8-adol-dana.jpg";
import monstrum from "../image/ys9/ys9_characters.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid flex column justify="center" align="center" margin="60px auto 48px">
      <Grid flex margin="0 auto 48px">
        <Image src={goddesses} size="500" shape="rectangle" />
        <Grid flex column align="left" margin="0 0 0 40px">
          <Text bold italic size="60px" margin="0 0 60px 0">
            35-year Anniversary!
          </Text>
          <Button>
            <a href="https://play-ys.com/" target="_blank">
              <Text color="#fff">이스 공식 홈페이지</Text>
            </a>
          </Button>
        </Grid>
      </Grid>

      <Grid flex margin="40px 0 0 0">
        <Grid flex column justify="center" align="center" margin="0 70px 0 0">
          <Image src={lacrimosa} size="450" shape="rectangle" />
          <Text bold italic size="60px" margin="12px 0 16px 0">
            The Best Series Ever
          </Text>
        </Grid>
        <Grid flex column justify="center" align="center">
          <Image src={monstrum} size="485" shape="rectangle" />
          <Text bold italic size="60px" margin="12px 0 16px 0">
            The Most Recent Series
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
