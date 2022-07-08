import React from 'react'
import { useNewTask } from '../../hooks/useNewTask'
import { Tasks } from '../../types/tasks'
import { Wrap } from '../ui/wrapper'
import * as S from './style'

type Props = {
  tasks: Tasks[]
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskForm: React.FC<Props> = ({ tasks, setReload }) => {
  const { handleSubmit, setTask, task } = useNewTask({ tasks, refresh: setReload })

  return (
    <Wrap>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder='Nova Tarefa'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          value={task}
          />
      </S.Form>
    </Wrap>
  )
}
