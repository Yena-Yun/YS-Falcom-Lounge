import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

const Button = (props) => {
  const { width, height, margin, bg, children, type, radius } = props;

  const styles = {
    width: width,
    height: height,
    // margin: margin,
    // padding: padding,
    bg: bg,
    radius: radius,
  };

  return (
    <ElButton {...styles} type={type}>
      {children}
    </ElButton>
  );
};

// props로 받아온 값들에 모두 초기값을 지정할 필요는 없음
// (여기서 margin과 padding은 초기값을 지정하지 않음)
// defaultProps를 지정하는 건 바뀔 여지가 있는 값들, 즉 props일 때만
Button.defaultProps = {
  width: "200px",
  height: "48px",
  bg: "black",
  // padding: "14px",
  radius: false,
  type: "submit",
  children: null,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  //padding은 반드시 있고
  /* padding: ${(props) => props.padding}; */
  // margin은 있을 수도 없을 수도 있음 (선택적임)
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  // 변화 없이 일정하게 + 반드시 반영할 값들은 props 없이 여기서만 지정
	border: none;
  cursor: pointer;

  /* &:active {
    border: none;
    outline: none;
  } */

  &:hover {
    width: 198px;
    padding: 13px;
    font-size: 15px;
    cursor: pointer;
  }
`;

export default Button;
