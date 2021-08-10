import React from "react";
import styled from "styled-components";

const Text = (props) => {
  // props로 받아올 요소들 선언
  const { bold, color, size, margin, children } = props;

  // props 요소들 중 모두 style 변수로 선언
  // (태그 내의 inline-style에 한 번에 설정하기 위함)
  // children은 style 요소가 아니므로 제외
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
  };

  // 반환할 태그에 style을 spread 문법으로 넣어주고,
  // 태그 사이에 들어갈 텍스트인 children도 넣어주기
  return <P {...styles}>{children}</P>;
};

// 맨 위에서 props로 받아온 요소들의 초기값 지정
// (태그에서 style을 변경하지 않았을 때 들어갈 기본값)
Text.defaultProps = {
  // props로 있을 수도 없을 수도 있는 값은 false로 초기화,
  // props로 반드시 들어오는 값은 0 또는 그 외 확정값으로 초기화
  bold: false,
  color: "#2d3035",
  size: "1rem",
  margin: 0,
  children: null, // children도 초기값 필요 (태그 사이에 아무 내용이 없을 때 대비)
};

// 반환할 컴포넌트의 스타일 지정
// (props로 스타일이 변경되었을 경우 실행할 함수들 선언)
const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  margin: ${(props) => props.margin};
`;

export default Text;