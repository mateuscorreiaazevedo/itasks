import React, { SetStateAction } from 'react'
import { Tasks } from '../../types/tasks'
import { hash } from '../../utils/hashId'
import { Wrap } from '../ui/wrapper'
import * as S from './style'

type Props = {
  tasks: Tasks[]
  setTasks?: React.Dispatch<SetStateAction<Tasks[]>>
  setReload: React.Dispatch<SetStateAction<boolean>>
}

export const TaskForm: React.FC<Props> = ({ tasks, setReload }) => {
  const [task, setTask] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = await hash()
    localStorage.setItem('tasks', JSON.stringify([
      ...tasks,
      { id, task, done: false }
    ]))
    setReload(prev => !prev)
    setTask('')
  }

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
