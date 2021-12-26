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
    font-family: ${({ theme }) => theme.textFont};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.textColor};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.titleFont};
    font-weight: 500;
    margin: 0;
  }
  input, button {
    line-height: 1.15;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-family: ${({ theme }) => theme.textFont};
  }
`;

export default GlobalStyle;
