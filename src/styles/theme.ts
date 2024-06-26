import createTheme from '@mui/material/styles/createTheme'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#37146B',
    },
    background: {
      default: '#F8F8F8',
    },
    warning: {
      main: '#FFD07B',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),
  },
})
