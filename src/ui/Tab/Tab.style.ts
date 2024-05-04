import { Tabs, styled } from '@mui/material'
import { ResponsiveContainer } from 'recharts'

export const StyledTabs = styled(Tabs)(() => ({
  minHeight: '36px',
  height: '36px',
  '& .MuiButtonBase-root.MuiTab-root': {
    minHeight: '36px',
    height: '36px',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#595959',
    '&.Mui-selected': {
      fontWeight: 700,
      color: '#6E27D5',
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#6E27D5',
    height: '2.5px',
  },
}))

export const StyledResponsiveContainer = styled(ResponsiveContainer)(() => ({
  '& .recharts-wrapper': {
    right: '40px',
  },
}))
