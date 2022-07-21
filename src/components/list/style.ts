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
  align-items: center;

  .checkbox {
    margin-right: 1rem;
  }
  .content {
    flex-grow: 1;
  }
`
export const TaskText = styled.label`
  cursor: pointer;
  font-size: .9rem;
  font-weight: 600;
  text-decoration: ${({ isChecked }: Props) => isChecked ? 'line-through' : 'none'};
`

export const TaskInput = styled.input.attrs({ type: 'text' })`
  font-size: 1rem;
  font-style: italic;
  font-weight: 600;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  height: 35px;
  width: 90%;
  padding-left: 10px;
  transition: 400ms;
  outline: none;
  border: none;
  border-radius: .5rem;
`

export const TaskBtn = styled.span`
  cursor: pointer;
  border: none;
  background: none;
  transition: 400ms;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${p => p.theme.colors.secundary};
  }
`
