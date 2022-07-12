import * as S from './style'
import { MdTaskAlt } from 'react-icons/md'
import React from 'react'

export const Header = () => (
  <S.Header>
    <MdTaskAlt className='itasks-icon' />
    <S.Title>
      <span>i</span>Tasks
    </S.Title>
  </S.Header>
)
