import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Tasks } from '../types/tasks'
import { hash } from '../utils/hashId'
import { setLocalStorage } from '../utils/setLocalStorage'

type Props = {
  tasks: Tasks[]
  refresh: Dispatch<SetStateAction<boolean>>
}

export function useNewTask ({ tasks, refresh }: Props) {
  const [task, setTask] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = await hash()

    setLocalStorage([...tasks, { id, task, done: false }])
    setTask('')
    refresh(prev => !prev)
  }

  return {
    task,
    setTask,
    handleSubmit
  }
}
