import { Wrap } from '../ui/wrapper'
import * as S from './style'
import React from 'react'
import { Tasks } from '../../types/tasks'
import { hash } from '../../utils/hashId'

export const TaskForm = () => {
  const storageTask = localStorage.getItem('tasks')
  const [tasks, setTasks] = React.useState<Tasks[]>(storageTask ? JSON.parse(storageTask) : [])
  const [task, setTask] = React.useState<string>('')
  const [done] = React.useState<boolean>(false)
  const [reload, setReload] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = await hash()
    localStorage.setItem('tasks', JSON.stringify([
      ...tasks,
      { id, task, done }
    ]))
    setReload(prev => !prev)
    setTask('')
  }

  React.useEffect(() => {
    setTasks(storageTask ? JSON.parse(storageTask) : [])
  }, [reload])

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
