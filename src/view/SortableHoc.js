import React from "react";
import styled from "styled-components";
import ColorBtn from "../components/Button/ColorBtn";
import BodyWrapper from "../components/Wrapper/BodyWrapper";

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
`;

const AnotherButton = styled.button`
  width: 50%;
  height: 50px;
  background-color: gold;
  border-radius: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 10px;
  color: white;
  background-color: darkgreen;
  font-weight: bold;
`;

const SortableHoc = () => {
  const list = [
    { id: 1, title: "1번 카드" },
    { id: 2, title: "2번 카드" },
    { id: 3, title: "3번 카드" },
    { id: 4, title: "4번 카드" },
    { id: 5, title: "5번 카드" },
    { id: 6, title: "6번 카드" },
    { id: 7, title: "7번 카드" },
  ];
  return (
    <BodyWrapper>
      <Title>Sortable-Hoc</Title>
      <ButtonWrapper>
        <ColorBtn bgColor="darkorange" />
        <ColorBtn bgColor="teal" />
        <ColorBtn bgColor="lightgray" />
        <ColorBtn bgColor="bisque" />
        <ColorBtn bgColor="greenyellow" />
        <ColorBtn bgColor="darkblue" />
      </ButtonWrapper>
      <ButtonWrapper>
        <AnotherButton />
        <AnotherButton />
      </ButtonWrapper>
      <ul>
        {list.map((item, idx) => (
          <Item key={item.id}>{item.title}</Item>
        ))}
      </ul>
    </BodyWrapper>
  );
};

export default SortableHoc;
