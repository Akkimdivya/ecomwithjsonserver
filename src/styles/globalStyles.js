// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5; // Global background color
    color: #333; // Global text color
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  // Add more global styles as needed
`;

export default GlobalStyles;
