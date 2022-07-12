import { TaskForm } from '../../components/form'
import { TaskList } from '../../components/list'
import { Wrap } from '../../components/ui/wrapper'
import { Tasks } from '../../types/tasks'
import * as S from './style'
import React from 'react'

export const MainPage = () => {
  const storageTask = localStorage.getItem('tasks')
  const [tasks, setTasks] = React.useState<Tasks[]>(storageTask ? JSON.parse(storageTask) : [])
  const [reload, setReload] = React.useState(false)

  React.useEffect(() => {
    setTasks(storageTask ? JSON.parse(storageTask) : [])
  }, [reload])

  return (
    <S.Main>
      <Wrap>
        <TaskForm tasks={tasks} setReload={setReload} />
        <TaskList tasks={tasks} setReload={setReload} />
      </Wrap>
    </S.Main>
  )
}
