import { useAlteredTask } from '../../hooks/useAlteredTask'
import { AiOutlineClose } from 'react-icons/ai'
import { Tasks } from '../../types/tasks'
import * as S from './style'
import React from 'react'

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
    <>
      {tasks.map(task => (
        <S.TaskContainer key={task.id}>
          <div>
            <input
              type="checkbox"
              onClick={(e) => checkedTask(e, task.id)}
              defaultChecked={task.done}
            />
            <S.TaskText isChecked={task.done} >{task.task}</S.TaskText>
          </div>
          <S.TaskBtn onClick={() => removeTask(task.id)}>
            <AiOutlineClose />
          </S.TaskBtn>
        </S.TaskContainer>
      ))}
    </>
  )
}
