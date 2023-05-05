import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-100: #F4EBFF;
    --primary-200: #E9D7FE;
    --primary-600: #7F56D9;
    --primary-700: #6941C6;
    --gray-50: #F9FAFB;
    --gray-100: #F7F8FA;
    --gray-200: #EAECF0;
    --gray-300: #D0D5DD;
    --gray-700: #344054;
    --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
  body {
    display: grid;
    place-items: center;
    height: 100vh;
    margin: 0;
  }
`;
