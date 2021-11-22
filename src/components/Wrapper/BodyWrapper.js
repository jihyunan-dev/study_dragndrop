import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

const BodyWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BodyWrapper;
