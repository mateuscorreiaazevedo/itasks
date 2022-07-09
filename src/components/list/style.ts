import styled from 'styled-components'

export const TaskContainer = styled.div`
  background: ${({ theme }) => theme.colors.secundary};
  padding: .8rem 2rem;
  margin-bottom: 1rem;
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding-top: .5rem;
    margin-right: 1rem;
  }
`
export const TaskText = styled.span`
  font-size: .9rem;
  font-weight: 600;
`
export const TaskBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
`
