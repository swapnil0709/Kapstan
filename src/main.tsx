import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Global } from '@emotion/react'
import { globalStyles } from './styles/GlobalStyles.ts'
import { theme } from './styles/theme.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppsContextProvider } from './state/AppContext.tsx'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AppsContextProvider>
          <App />
        </AppsContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
