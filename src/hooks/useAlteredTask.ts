import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { Tasks } from '../types/tasks'
import { setLocalStorage } from '../utils/setLocalStorage'

interface Props {
  tasks: Tasks[]
  refresh: Dispatch<SetStateAction<boolean>>
}

export function useAlteredTask ({ tasks, refresh }: Props) {
  const checkedTask = (e: MouseEvent<HTMLInputElement>, id: string | number) => {
    const taskIndex = tasks.findIndex(item => item.id === id)

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      done: e.currentTarget.checked
    }

    setLocalStorage(tasks)

    refresh(prev => !prev)
  }

  const removeTask = (id: string | number) => {
    setLocalStorage(tasks.filter(task => task.id !== id))
    refresh(prev => !prev)
  }

  return {
    checkedTask,
    removeTask
  }
}
