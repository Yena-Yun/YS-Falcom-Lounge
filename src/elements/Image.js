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
  size: 300,
  radius: 50,
};

// 반응형??
const AspectOutter = styled.div`
  width: ${(props) => props.size}px;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  border: 1px solid #eee;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const ImageCircle = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid #eee;
  border-radius: ${(props) => props.radius}%;
  background-image: url() ("${(props) => props.src}");
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Image;
