import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    /* position: relative; */
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
    width: 100%;
    height: 100vh;
  }
  
`
