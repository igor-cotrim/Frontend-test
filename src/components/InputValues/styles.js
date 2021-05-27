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
    }
`;

export const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "number",
  
  // or we can define dynamic ones
  size: props.size || "3rem",
  margin: props.margin || "1rem 0 1rem 0",
}))`
  border: none;
  margin: ${props => props.margin};
  height: 37px;
  width: ${props => props.size};
  border-radius: 4px;
  font-size: 2rem;
  font-weight: 700;
  color: var(--preto);
`;