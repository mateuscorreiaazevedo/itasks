import { Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useState } from 'react'
import { setTaskStorage } from '../utils/setLocalStorage'
import { Tasks } from '../types/tasks'

interface Props {
  tasks: Tasks[]
  refresh: Dispatch<SetStateAction<boolean>>
  taskEdited: string
}

export function useAlteredTask ({ tasks, refresh, taskEdited }: Props) {
  const [viewEdit, setViewEdit] = useState<string | null>(null)

  const checkedTask = (e: MouseEvent<HTMLInputElement>, id: string | number) => {
    const taskIndex = tasks.findIndex(item => item.id === id)

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      done: e.currentTarget.checked
    }

    setTaskStorage(tasks)

    refresh(prev => !prev)
  }

  const removeTask = (id: string | number) => {
    setTaskStorage(tasks.filter(task => task.id !== id))
    refresh(prev => !prev)
  }

  const toEnter = (e: KeyboardEvent<HTMLInputElement>, id: string) => {
    const enter = e.code === 'Enter'
    const findTask = tasks.findIndex(item => item.id === id)
    if (enter) {
      tasks[findTask] = {
        ...tasks[findTask],
        task: taskEdited
      }

      setTaskStorage(tasks)
      refresh(prev => !prev)
      setViewEdit(null)
    }
  }

  return {
    checkedTask,
    removeTask,
    viewEdit,
    setViewEdit,
    toEnter
  }
}
