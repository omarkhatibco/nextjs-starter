import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
  }

  ${reset}



  :root {
    /* Colors */
    --color-white : #fff;
    --color-black : #292929;
    --text: #000000;
    --textLight: #D9D9D9;
    --interaction: #897160;
    --accent: #5D4149;
    --background: #FFF;
    --background-medium: #AA9688;
    --backgroundLight: #E7E3DF;
    --statusGreenFull: #337E33;
    --statusGreenLight: #EAF2EA;
   
    /* Font-Sizes */
    --body-font-size: 1rem;



    /* Breakpoints */
    --gutter:1rem;
    --breakpoint-sm: 640px;
    --breakpoint-md: 750px;
    --breakpoint-xl: 1280px;


    /* others */
    --transition: all 0.3s ease-in-out;
  }
  
  body {
    width: 100%;
    height:100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color : var(--color-black);
  }

  .__next {
    width: 100%;
    height:100%;
    min-height: 100vh;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
  }

`;
