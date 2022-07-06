import styled from 'styled-components'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.5rem 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  
  background: ${({ theme }) => theme.colors.secundary};
`
