import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #000000;
      letter-spacing: 0.0475296px;
  }
  html, body, #root {
      max-height: 100vh;
      max-width: 100vw;
      width: 100%;
      height: 100%;
  }
   *, button, input {
       border: 0;
       background: none;

       font-family: 'Karla', 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
   }

`;
