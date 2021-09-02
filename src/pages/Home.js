/* eslint-disable */
import React from 'react';
import { Grid, Text, Button, Input, Image } from '../elements';
import goddesses from '../image/etc/ys-goddesses.jpg';
import lacrimosa from '../image/ys8/ys8-adol-dana.jpg';
import monstrum from '../image/ys9/ys9_characters.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <Grid flex column justify="center" align="center" margin="60px auto 48px">
      <Grid flex margin="0 auto 48px">
        <Image src={goddesses} size="500" shape="rectangle" />
        <Grid flex column align="left" ml="40px">
          <Text bold italic size="60px" mb="60px">
            35-year Anniversary!
          </Text>
          <Button
            mt="32px"
            width="220px"
            padding="1rem 1.5rem"
            paddingHover="1.2rem 1.7rem"
          >
            <a href="https://play-ys.com/" target="_blank">
              <Text color="#fff">이스 공식 홈페이지</Text>
            </a>
          </Button>
        </Grid>
      </Grid>

      <Grid flex mt="40px">
        <Grid flex column justify="center" align="center" mr="70px">
          <div
            onClick={() => {
              history.push('/board8');
            }}
          >
            <Image src={lacrimosa} size="450" shape="rectangle" />
          </div>
          <Text bold italic size="42px" margin="12px 0 16px 0">
            Lacrimosa of Dana
          </Text>
        </Grid>
        <Grid flex column justify="center" align="center">
          <Image src={monstrum} size="485" shape="rectangle" />
          <Text bold italic size="42px" margin="12px 0 16px 0">
            Monstrum Noxs
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
