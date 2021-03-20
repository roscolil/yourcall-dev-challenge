import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #E5E5E5;
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    font-weight: 300;
    font-style: normal;
    font-size: 36px;
    line-height: 41px;
    letter-spacing: 0.015em;
    margin: 0;
    text-transform: capitalize;
  }
 
  h4 {
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
    margin: 0;
    letter-spacing: 0.015em;
    text-transform: capitalize;
  }

  h5 {
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.015em;
    margin: 8px 0 0 0;
    text-transform: capitalize;
  }
`;

export default GlobalStyle;