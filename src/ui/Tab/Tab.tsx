import * as React from 'react'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { StyledResponsiveContainer, StyledTabs } from './Tab.style'
import { Divider } from '@mui/material'
import { StyledDot } from '../../styles/GlobalStyles'

interface TabPanelProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  const tabHeading = value === 0 ? 'CPU Utilization (%)' : 'Memory'
  const legend = [
    { id: 1, color: '#6E27D5', text: 'tic-tac-toe' },
    { id: 2, color: '#B88BFE', text: 'chess' },
    { id: 3, color: '#F39C12', text: 'sudoku' },
  ]
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ marginTop: '10px' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
              marginBottom: '10px',
            }}
          >
            {tabHeading}
          </Typography>
          <StyledResponsiveContainer width={'100%'} height={'100%'}>
            <>
              {children}
              <Divider sx={{ borderColor: '#EBEBEB', margin: '12px 0' }} />
              <Box sx={{ display: 'flex', gap: '16px' }}>
                {legend.map(
                  ({
                    id,
                    color,
                    text,
                  }: {
                    id: number
                    color: string
                    text: string
                  }) => {
                    return (
                      <Box
                        key={id}
                        sx={{
                          display: 'flex',
                          gap: '8px',
                          alignItems: 'center',
                        }}
                      >
                        <StyledDot color={color} />
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: '500',
                            lineHeight: '18px',
                          }}
                        >
                          {text}
                        </Typography>
                      </Box>
                    )
                  }
                )}
              </Box>
            </>
          </StyledResponsiveContainer>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs({
  tab1,
  tab2,
}: {
  tab1: React.ReactNode
  tab2: React.ReactNode
}) {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="CPU" {...a11yProps(0)} />
          <Tab label="MEMORY" {...a11yProps(1)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {tab1}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {tab2}
      </CustomTabPanel>
    </Box>
  )
}
