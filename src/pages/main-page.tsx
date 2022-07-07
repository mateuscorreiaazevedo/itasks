import React from 'react'
import { TaskForm } from '../components/form'
import { TaskList } from '../components/list'
import { Tasks } from '../types/tasks'

export const MainPage = () => {
  const storageTask = localStorage.getItem('tasks')
  const [tasks, setTasks] = React.useState<Tasks[]>(storageTask ? JSON.parse(storageTask) : [])
  const [reload, setReload] = React.useState(false)

  React.useEffect(() => {
    setTasks(storageTask ? JSON.parse(storageTask) : [])
  }, [reload])

  return (
    <main>
      <TaskForm tasks={tasks} setReload={setReload} />
      <br />
      <TaskList tasks={tasks} setReload={setReload} />
    </main>
  )
}
