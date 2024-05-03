import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Global } from '@emotion/react'
import { globalStyles } from './styles/GlobalStyles.ts'
import { theme } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
