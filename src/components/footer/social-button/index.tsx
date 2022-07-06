import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub, BsJustify } from 'react-icons/bs'
import * as S from './style'

export const SocialButtons = () => {
  const [links, setLinks] = React.useState<boolean>(false)

  return (
    <S.SocialWrapper >
      <div className='btn' onClick={() => setLinks(prev => !prev)}>
        <BsJustify />
      </div>
      {links && (
        <div>
          <a className='btn' href="https://www.linkedin.com/in/mateuscorreiaazevedo" target='_blank' rel="noreferrer">
            <BsLinkedin />
          </a>
          <a className='btn' href="https://www.instagram.com/mateuscorreiaazevedo/" target='_blank' rel="noreferrer">
            <BsInstagram />
          </a>
          <a className='btn' href="https://www.github.com/mateuscorreiaazevedo/" target='_blank' rel="noreferrer">
            <BsGithub />
          </a>
        </div>)}
    </S.SocialWrapper>
  )
}
