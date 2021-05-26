import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 6rem;
  margin-bottom: 6rem;

  display: flex;
  align-items: center;

  div.letfSection{
    max-width: 420px;
    margin-right: 14rem;

    h2{
      font-size: 2rem;
      font-weight: 700;
      color: var(--azul-escuro);
    }

    h3{
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--cinza-escuro);
      margin: 1rem 0 1rem 0;
    }

    div.valueSell{
      display: flex;
      align-items: center;

      div{
        max-width: 230px;
      }

      h1{
        font-size: 2rem;
        font-weight: 700;
        color: var(--preto);
        margin-right: 4rem;
      }

      button{
        margin-right: 1rem;
        width: 2.1875rem;
        height: 2.1875rem;
        border: none;
        border-radius: 50%;
        color: var(--branco);
        background-color: var(--azul-escuro);
        font-size: 1.3rem;
        transition: filter 0.2s;
      }

      button:hover{
        filter: brightness(0.8);
      }
    }

    div.NumParcel{
      display: flex;
      align-items: center;

      div{
        max-width: 230px;
      }

      h1{
        font-size: 2rem;
        font-weight: 700;
        color: var(--preto);
        margin-right: 4.6rem;
      }

      button{
        margin-right: 1rem;
        width: 2.1875rem;
        height: 2.1875rem;
        border: none;
        border-radius: 50%;
        color: var(--branco);
        background-color: var(--azul-escuro);
        font-size: 1.3rem;
        transition: filter 0.2s;
      }

      button:hover{
        filter: brightness(0.8);
      }
    }

    p{
      font-size: 1rem;
      font-weight: 400;
      color: var(--cinza-escuro);
      margin-top: 4rem;
    }
  }

  div.rightSection{
    box-shadow: 0px 4px 30px 0px #00000026;
    border-radius: 1rem;
    width: 370px;
    height: 411px;
    padding: 2.8rem;

      p{
        font-weight: 400;
        font-size: 1rem;
        color: #000;
        margin-top: 1rem;
      }

      h1{
        font-size: 3rem;
        font-weight: 500;
        color: var(--azul-escuro);
      }
  }
`;