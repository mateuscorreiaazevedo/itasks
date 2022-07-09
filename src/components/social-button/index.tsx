import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub, BsJustify } from 'react-icons/bs'
import * as S from './style'
import env from '../../config/env'

export const SocialButtons = () => {
  const [links, setLinks] = React.useState<boolean>(false)

  const openSocialLinks = () => {
    setLinks(prev => !prev)
    setTimeout(() => {
      setLinks(false)
    }, 10000)
  }

  return (
    <S.SocialWrapper >
      <div className='btn' onClick={openSocialLinks}>
        <BsJustify />
      </div>
      {links && (
        <div>
          <div className='btn'>
            <span className='btn-alt'>LinkedIn</span>
            <a href={env.LINKEDIN} target='_blank' rel="noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <div className="btn">
            <span className='btn-alt'>Instagram</span>
            <a href={env.INSTAGRAM} target='_blank' rel="noreferrer">
              <BsInstagram />
            </a>
          </div>
          <div className="btn">
            <span className='btn-alt'>Repositore</span>
            <a href={env.GITHUB} target='_blank' rel="noreferrer">
              <BsGithub />
            </a>
          </div>
        </div>)}
    </S.SocialWrapper>
  )
}
