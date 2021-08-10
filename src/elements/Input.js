import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

const Input = (props) => {
  const { width, padding, border, bg, radius, type, placeholder, _onChange } = props;

  const styles = {
    width: width,
    padding: padding,
    border: border,
    bg: bg,
    radius: radius,
  };

  return (
    <Grid>
      <ElInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} />
    </Grid>
  );
};

Input.defaultProps = {
  width: "100%",
  padding: "0.1rem 0.5rem",
  border: "1px solid #eee",
  bg: "transparent",
  radius: "0.5rem",
  type: "text",
  placeholder: "시리즈, 등장인물 검색",
  onChange: () => {},
};

const ElInput = styled.div`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.radius ? `background-color: ${props.radius};` : "")}
	box-sizing: border-box;

  &:active {
    border: none;
    outline: none;
  }
`;

export default Input;
