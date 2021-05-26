import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    margin-right: 3rem;
    max-width: 420px;

    h1{
      font-weight: 700;
      font-size: 3.5rem;
      color: var(--azul-escuro);

    }

    img{
      margin: 1rem 0 1rem 0rem;
    }

    h2{
      font-weight: 400;
      font-size: 2rem;
      color: var(--azul-escuro);
    }
  }
`;
