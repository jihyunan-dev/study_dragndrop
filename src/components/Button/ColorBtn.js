import React from "react";
import styled from "styled-components";

const Btn = styled.button.attrs({ type: "button" })`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
`;

const ColorBtn = ({ text, bgColor }) => {
  return <Btn bgColor={bgColor}>{text}</Btn>;
};

export default ColorBtn;
