import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.text};
  `
export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.15rem;
  span {
    margin-right: .1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`
