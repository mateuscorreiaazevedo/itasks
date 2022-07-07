import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub, BsJustify } from 'react-icons/bs'
import * as S from './style'

export const SocialButtons = () => {
  const [links, setLinks] = React.useState<boolean>(false)

  const openSocialLinks = () => {
    setLinks(prev => !prev)
    setTimeout(() => {
      setLinks(prev => !prev)
    }, 15000)
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
            <a href="https://www.linkedin.com/in/mateuscorreiaazevedo" target='_blank' rel="noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <div className="btn">
            <span className='btn-alt'>Instagram</span>
            <a href="https://www.instagram.com/mateuscorreiaazevedo/" target='_blank' rel="noreferrer">
              <BsInstagram />
            </a>
          </div>
          <div className="btn">
            <span className='btn-alt'>Repositore</span>
            <a href="https://github.com/mateuscorreiaazevedo/itasks" target='_blank' rel="noreferrer">
              <BsGithub />
            </a>
          </div>
        </div>)}
    </S.SocialWrapper>
  )
}
