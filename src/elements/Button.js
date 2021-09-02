import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/styles/palette';

const Button = (props) => {
  const {
    width,
    height,
    margin,
    mt,
    mb,
    ml,
    mr,
    bg,
    padding,
    paddingHover,
    bgHover,
    red,
    indigo,
    color,
    size,
    children,
    type,
    radius,
    _onClick,
  } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    mt: mt,
    mb: mb,
    ml: ml,
    mr: mr,
    padding: padding,
    paddingHover: paddingHover,
    bg: bg,
    bgHover: bgHover,
    red: red,
    indigo: indigo,
    color: color,
    size: size,
    radius: radius,
  };

  return (
    <ElButton {...styles} type={type} onClick={_onClick}>
      {children}
    </ElButton>
  );
};

// props로 받아온 값들에 모두 초기값을 지정할 필요는 없음
// (여기서 margin과 padding은 초기값을 지정하지 않음)
// defaultProps를 지정하는 건 바뀔 여지가 있는 값들, 즉 props일 때만
Button.defaultProps = {
  bg: '#212529',
  bgHover: '#343a40',
  padding: '8px 18px',
  paddingHover: '9px 19px',
  color: '#fff',
  radius: '4px',
  size: '1rem',
  type: 'submit',
  children: null,
  _onClick: () => {},
};

const ElButton = styled.button`
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.height ? `height: ${props.height}` : '')};
  /* ${(props) => (props.padding ? `padding: ${props.padding}` : '')}; */
  padding: ${(props) => props.padding};
  background: ${(props) => props.bg};
  font-size: ${(props) => props.size};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.mt ? `margin-top: ${props.mt};` : '')}
  ${(props) => (props.mb ? `margin-bottom: ${props.mb};` : '')}
  ${(props) => (props.ml ? `margin-left: ${props.ml};` : '')}
  ${(props) => (props.mr ? `margin-right: ${props.mr};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}

  // 변화 없이 일정하게 + 반드시 반영할 값들은 props 없이 여기서만 지정
	border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.bgHover};
    padding: ${(props) => props.paddingHover};
  }

  ${(props) =>
    props.red &&
    css`
      background: ${palette.red[9]};
      &:hover {
        background: ${palette.red[8]};
      }
    `}

  ${(props) =>
    props.indigo &&
    css`
      background: ${palette.indigo[9]};
      &:hover {
        background: ${palette.indigo[8]};
      }
    `}
`;

export default Button;
