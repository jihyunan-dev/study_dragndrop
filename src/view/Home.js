import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BodyWrapper from "../components/Wrapper/BodyWrapper";

const LinkBtn = styled.button.attrs({ type: "button" })`
  width: 100%;
  height: 40px;
  background-color: lightgray;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <BodyWrapper>
      <LinkBtn onClick={() => navigate("/sortable")}>SortableHoc</LinkBtn>
      {/* <LinkBtn onClick={() => navigate("/sortable")}>ReactBeautifulDnD</LinkBtn> */}
      {/* <LinkBtn onClick={() => navigate("/sortable")}>ReactDnD</LinkBtn> */}
    </BodyWrapper>
  );
};

export default Home;
