import styled from 'styled-components'

export const TaskContainer = styled.div`
  background: ${({ theme }) => theme.colors.secundary};
  padding: .5rem 2rem;
  margin: .5rem 0;
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const TaskText = styled.span`
  input {
    margin-right: .5rem;
  }
  font-size: .9rem;
`
export const TaskBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
`
