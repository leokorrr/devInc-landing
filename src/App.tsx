import { CssBaseline, ThemeProvider } from '@mui/material/'
import React from 'react'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { ContentPage } from './pages/ContentPage'
import { getTheme } from './ui/theme/base'

const App: React.FC = () => {
  const theme = getTheme('light')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <ContentPage />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
