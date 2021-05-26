import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --azul-escuro: #212366;
    --azul-claro: #009bdf;
    --verde-escuro: #32cd32;
    --verde-claro: #4eefdf;
    --preto: #232323;
    --cinza-escuro: #606060;
    --cinza: #d9d9d9;
    --cinza-claro: #f4f4f4;
    --branco: #fff;
    --laranja: #ff6600;
    --rosa: #e6007e;
    --amarelo: #ffff00;
    --roxo: #9f00ff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background:var(--branco);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`