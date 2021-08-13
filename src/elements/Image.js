import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, size, radius, shape } = props;

  const styles = {
    src: src,
    size: size,
    radius: radius,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <></>;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://i.esdrop.com/d/KwrGH1p1Zl/h9fOKJuVzP.png",
  size: 200,
  radius: 50,
};

// 이미지가 직사각형일 때는 잘리면 안 되므로 바깥쪽을 한 번 더 감싸주고 감싸준 쪽에서 크기 조절
const AspectOutter = styled.div`
  width: ${(props) => props.size}px;
`;

const AspectInner = styled.img`
  position: relative;
  width: ${(props) => props.size}px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: pointer;
`;

const ImageCircle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.radius}%;
  background-image: url() ("${(props) => props.src}");
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  cursor: pointer;
`;

export default Image;
