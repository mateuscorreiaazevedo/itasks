import styled from 'styled-components'

export const Header = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.text};

  .itasks-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};    
  }
`
export const Title = styled.h1`
  display: block;
  font-size: 2rem;
  letter-spacing: 0.15rem;
  span {
    margin-right: .1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`
