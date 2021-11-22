import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    
  }

  input {
    background-color: transparent;
    border: none;
  }

  a {
    color: black;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default GlobalStyles;
