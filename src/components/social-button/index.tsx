import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'
import env from '../../config/env'
import * as S from './style'
import React from 'react'

export const SocialButtons = () => {
  const [links, setLinks] = React.useState<boolean>(false)
  let timeOut: any = null

  const openSocialLinks = () => {
    setLinks(prev => !prev)
    timeOut = setTimeout(() => {
      setLinks(false)
    }, 15000)
  }

  React.useEffect(() => {
    return () => {
      if (timeOut) {
        clearTimeout(timeOut)
      }
    }
  }, [timeOut])

  return (
    <S.SocialWrapper >
      <div className='btn' onClick={openSocialLinks}>
        <HiDotsVertical />
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
