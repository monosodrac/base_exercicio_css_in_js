import styled from 'styled-components'

export const Cabecalho = styled.header`
  display: flex;
  justify-content: center;
  gap: 8px;
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;

  @media (max-width: 768px) {
    display: block;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    width: 75px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};

    :hover {
      background-color: transparent;
      color: ${(props) => props.theme.corPrincipal};
    }
  }
`
