import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid, Text, Button, Input, Image } from "../elements";

const Roo = (props) => {
  return (
    <Grid>
      <Header />
      <Grid>
        <Text>What is Roo?</Text>
      </Grid>
    </Grid>
  );
};

export default Roo;
