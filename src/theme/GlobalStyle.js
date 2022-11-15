import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  #root{
    display: flex;
    justify-content: center;
  }


  .c-p{
    color :${({ theme }) => theme.color.primary};
  }
  .flx{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .col{
    flex-direction: column;
  }
  .fs-s{
    font-size:${({ theme }) => theme.fontSize.s};
  }
  .fs-m{
    font-size:${({ theme }) => theme.fontSize.m};
  }
  .fs-l{
    font-size:${({ theme }) => theme.fontSize.l};
  }
  .fw-s{
    font-weight: ${({ theme }) => theme.fontWeight.s};
  }
  .fw-m{
    font-weight: ${({ theme }) => theme.fontWeight.m};
  }
  .fw-l{
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }
  .g-s{
    gap:${({ theme }) => theme.gap.s};
  }
  .g-m{
    gap:${({ theme }) => theme.gap.m};
  }
  .g-l{
    gap:${({ theme }) => theme.gap.l};
  }

  html {
    font-size: 62.5%;
    line-height: 1.6;
    /* Footer support */
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Josefin Sans';
    font-size: 1.6rem;
    /* Footer support */
    margin-bottom: 5.2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    html {
      font-size: 55%;
    }
  }



  @media (max-width: 1400px) {
    html {
      font-size: 45%;
    }
  }
`
export default GlobalStyle
