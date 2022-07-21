import React from 'react'
import styled from 'styled-components'
import * as S from './style'
import { HiDotsVertical } from 'react-icons/hi'

const Wrap = styled.div`
  position: relative;
  font-size: 1rem;
  cursor: pointer;
  .content {
    animation: view 400ms;
    @keyframes view {
      from {
        transform: scale(0);
      }
    }
    position: absolute;
    right: 10px;
    top: 20px;
    padding: 6px 15px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`
type Props = {
  removeTask: () => void
  taskEdit: () => void
  id: string
}

export const OptionButton = ({ taskEdit, removeTask, id }: Props) => {
  const [viewOptions, setViewOptions] = React.useState<string>('')

  const handleViewOptions = () => {
    setViewOptions(prev => prev === id ? '' : id)
  }

  return (
    <Wrap onClick={handleViewOptions}>
      <HiDotsVertical/>
      {viewOptions === id && (
        <div className='content'>
          <S.TaskBtn onClick={removeTask}>
            Deletar
          </S.TaskBtn>
          <S.TaskBtn onClick={taskEdit}>
            Editar
          </S.TaskBtn>
        </div>
      )}
    </Wrap>
  )
}
