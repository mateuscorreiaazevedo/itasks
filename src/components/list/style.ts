import styled from 'styled-components'

type Props = {
  isChecked: boolean
}

export const TaskContainer = styled.div`
  background: ${({ theme }) => theme.colors.secundary};
  height: 3rem;
  padding: 0 2rem;
  margin-bottom: 1rem;
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    margin-right: 1rem;
  }
`
export const TaskText = styled.label`
  cursor: pointer;
  font-size: .9rem;
  font-weight: 600;
  text-decoration: ${({ isChecked }: Props) => isChecked ? 'line-through' : 'none'};
`
export const TaskBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
`
