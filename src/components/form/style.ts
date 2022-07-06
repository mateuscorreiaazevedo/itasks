import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: 3.5rem;
  border: none;
  padding: 0 1rem;
  border-radius: .5rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  &:focus {
    outline: none;
  }
`
