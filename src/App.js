import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Grid, Text, Button, Input, Image } from "./elements";
import goddesses from "./image/etc/ys-goddesses.jpg";
import adol_dana from "./image/etc/ys8-adol-dana.jpg";

const App = () => {
  return (
    <AppBlock>
      <Header />

      <Grid column_flex>
        <Image src={goddesses} size="300" shape="rectangle" />
        <Text bold italic size="60">
          35-year Anniversary!
        </Text>

        <div className="button-block">
          <button className="history" type="submit">
            이스 히스토리
          </button>
          <button className="homepage" type="submit" onClick={() => window.open("https://play-ys.com/")}>
            이스 공식 홈페이지
          </button>
        </div>
        <Image src={adol_dana} size="300" shape="rectangle" margin="50" />
        <Text bold italic size="60">
          The Best Game Ever
        </Text>

        <button className="ys8-homepage" type="submit" onClick={() => window.open("https://ysviii.com/index.html")}>
          이스 8 소개
        </button>
      </Grid>
      <Footer />
    </AppBlock>
  );
};

const AppBlock = styled.div`
  background: url("./image/etc/wall-paper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 170vh;
`;

export default App;
