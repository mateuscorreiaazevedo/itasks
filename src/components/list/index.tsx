import { Tasks } from '../../types/tasks'
import { Wrap } from '../ui/wrapper'
import React, { SetStateAction } from 'react'
import * as S from './style'

interface Props {
  tasks: Tasks[]
  setReload: React.Dispatch<SetStateAction<boolean>>
}

export const TaskList: React.FC<Props> = ({ setReload, tasks }) => {
  const removeTask = (id: string | number) => {
    localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task.id !== id)))
    setReload(prev => !prev)
  }

  return (
    <Wrap>
      {tasks.map(task => (
        <S.TaskContainer key={task.id}>
          <S.TaskText>
            <input type="checkbox"/>
            {task.task}
          </S.TaskText>
          <S.TaskBtn onClick={() => removeTask(task.id)}>X</S.TaskBtn>
        </S.TaskContainer>
      ))}
    </Wrap>
  )
}
