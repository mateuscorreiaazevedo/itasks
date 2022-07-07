import React from 'react'
import { Tasks } from '../../types/tasks'
import { Wrap } from '../ui/wrapper'

export const TaskList: React.FC<Tasks> = (props) => {
  const { task } = props

  return (
    <Wrap>
      <p>
        {task}
      </p>
    </Wrap>
  )
}
