import { useAlteredTask } from '../../hooks/useAlteredTask'
import { Tasks } from '../../types/tasks'
import * as S from './style'
import React from 'react'
import { OptionButton } from './option-button'

interface Props {
  tasks: Tasks[]
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskList: React.FC<Props> = ({ setReload, tasks }) => {
  const [taskEdited, setTaskEdited] = React.useState<string>('')
  const {
    checkedTask,
    removeTask,
    setViewEdit,
    viewEdit,
    toEnter
  } = useAlteredTask({ refresh: setReload, tasks, taskEdited })

  const activeEditField = (id: string) => {
    setViewEdit(prev => prev === id ? null : id)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, task: string) => {
    const { value } = e.target
    setTaskEdited(value)
  }

  return (
    <>
      {tasks.map(task => (
        <S.TaskContainer key={task.id}>
          <div className='content'>
            <input
              className='checkbox'
              onClick={(e) => checkedTask(e, task.id)}
              defaultChecked={task.done}
              type="checkbox"
              id={task.id}
            />
            {viewEdit === task.id
              ? (
                <S.TaskInput
                  type="text"
                  defaultValue={task.task}
                  onChange={(e) => handleChange(e, task.task)}
                  onKeyDown={(e) => toEnter(e, task.id)}
                />
                )
              : <S.TaskText isChecked={task.done} htmlFor={task.id}>{task.task}</S.TaskText>
            }
          </div>
          <OptionButton
            removeTask={() => removeTask(task.id)}
            taskEdit={() => activeEditField(task.id)}
            id={task.id}
          />
        </S.TaskContainer>
      ))}
    </>
  )
}
