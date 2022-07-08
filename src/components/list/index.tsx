import { Tasks } from '../../types/tasks'
import { Wrap } from '../ui/wrapper'
import React from 'react'
import * as S from './style'
import { useAlteredTask } from '../../hooks/useAlteredTask'

interface Props {
  tasks: Tasks[]
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskList: React.FC<Props> = ({ setReload, tasks }) => {
  const { checkedTask, removeTask } = useAlteredTask({
    refresh: setReload,
    tasks
  })

  return (
    <Wrap>
      {tasks.map(task => (
        <S.TaskContainer key={task.id}>
          <div>
            <input
              type="checkbox"
              onClick={(e) => checkedTask(e, task.id)}
              checked={task.done}
            />
            <S.TaskText>
              {task.task}
            </S.TaskText>
          </div>
          <S.TaskBtn onClick={() => removeTask(task.id)}>X</S.TaskBtn>
        </S.TaskContainer>
      ))}
    </Wrap>
  )
}
