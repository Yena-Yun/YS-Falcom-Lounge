import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { row_flex, column_flex, header_flex, width, height, margin, padding, bg, children } = props;

  const styles = {
    row_flex: row_flex,
    column_flex: column_flex,
    header_flex: header_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
  };

  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  // props로 들어올 수도 안 들어올 수도 있는 선택적인 값의 초기값은 false로 지정
  row_flex: false,
  column_flex: false,
  header_flex: false,
  width: "100%",
  height: "100vh",
  margin: false,
  padding: false,
  bg: false,
  children: null, // children도 초기값 필요 (태그 사이에 아무 내용이 없을 때를 대비)
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  /* props로 들어오지 않을 수도 있는 선택적인 값들 처리하기
		1) css 속성을 앞에 명시하지 않고 바로 props 문법으로 시작
		2) 백틱을 넣은 코드 안에 ';'를 넣고 문장의 맨 끝에는 생략
			(해당 속성이 없을 경우 아예 props 자체가 존재하지 않으므로 (= 공백 처리))
	*/
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
	${(props) => (props.bg ? `background-color: ${props.bg};` : "")}

	${(props) => (props.row_flex ? `display: flex; justify-content: space-between; align-items: center;` : "")};
  ${(props) => (props.column_flex ? `display: flex; flex-direction: column; justify-content: center; align-items: center;` : "")};
  ${(props) => (props.header_flex ? `display: flex; justify-content: flex-start; align-items: center;` : "")}
`;

export default Grid;
