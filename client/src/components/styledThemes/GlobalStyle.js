import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.textFont};
    color: ${props => props.theme.textColor};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.titleFont};
    font-weight: 500;
    margin: 0;
  }
`;

export default GlobalStyle;
