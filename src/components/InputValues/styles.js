import styled from 'styled-components';

export const Container = styled.div`
    max-width: 420px;
    margin-right: 14rem;

    label{
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--cinza-escuro);
    }

    div{
      display: flex;
      align-items: center;

      h3{
        font-size: 2rem;
        font-weight: 700;
        color: var(--preto);
      }

      input{
        border: none;
        margin: 1rem 0 1rem 0;
        height: 37px;
        width: 240px;
        border-radius: 4px;
        font-size: 2rem;
        font-weight: 700;
        color: var(--preto);
      }
    }
`;
