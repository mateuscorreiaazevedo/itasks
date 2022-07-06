import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { shade } from 'polished'
import * as S from './style'
import React from 'react'

type Props = {
  change(): void
}

export const Footer: React.FC<Props> = ({ change }) => {
  const { colors, title } = React.useContext(ThemeContext)

  return (
    <S.Footer>
      <div>
        <p>
          <b>iTasks®</b> - by: Mateus Correia Azevedo - 2022
        </p>
      </div>
      <div>
        <Switch
          onChange={change}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={10}
          onColor={colors.primary}
          offColor={shade(0.15, colors.secundary)}
          onHandleColor={colors.secundary}
          />
      </div>
    </S.Footer>
  )
}
