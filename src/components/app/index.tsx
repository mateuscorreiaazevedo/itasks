import { localStorageTheme } from '../../utils/localStorageTheme'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../../assets/style/global.style'
import { SocialButtons } from '../footer/social-button'
import light from '../../assets/style/theme/light'
import dark from '../../assets/style/theme/dark'
import { Header } from '../header'
import { Footer } from '../footer'
import React from 'react'
import { MainPage } from '../../pages/main-page'

export default function App () {
  const [theme, setTheme] = localStorageTheme<DefaultTheme>('theme', light)

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainPage />
      <SocialButtons />
      <Footer change={handleTheme} />
    </ThemeProvider>
  )
}
