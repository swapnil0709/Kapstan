import { Box, Button, Typography } from '@mui/material'
import ThreeDotsIcon from '../assets/Vertical.svg'
import Icon from '../components/Icon/Icon'
import historyIcon from '../assets/History.svg'
import monitorIcon from '../assets/Monitor.svg'
import triangleIcon from '../assets/Triangle.svg'
import buildIcon from '../assets/Build.svg'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getApplicationsData } from '../api/applications'
import { getMemoryUtilizationData } from '../api/memory-utilization'
import { getCpuUtilizationData } from '../api/cpu-utilization'
import { getEventHistoryData } from '../api/event-history'

const actionButtons = [
  { label: 'Overview', icon: monitorIcon, path: 'overview' },
  {
    label: 'Environment Variables',
    icon: buildIcon,
    path: 'environment-variables',
  },
  { label: 'Alerts', icon: triangleIcon, path: 'alerts' },
  { label: 'Event history', icon: historyIcon, path: 'event-history' },
]

const Applications = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleTabChange = (path: string) => {
    navigate(path)
  }
  const { data: applicationData } = useQuery({
    queryKey: ['applications'],
    queryFn: getApplicationsData,
  })
  const { data: memoryData } = useQuery({
    queryKey: ['memory-utilization'],
    queryFn: getMemoryUtilizationData,
  })
  const { data: cpuData } = useQuery({
    queryKey: ['cpu-utilization'],
    queryFn: getCpuUtilizationData,
  })
  const { data: eventHistoryData } = useQuery({
    queryKey: ['event-history'],
    queryFn: getEventHistoryData,
  })

  useEffect(() => {
    console.log({ applicationData, memoryData, cpuData, eventHistoryData })
  }, [applicationData, cpuData, eventHistoryData, memoryData])

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography fontSize={'20px'} fontWeight={700} lineHeight={'24px'}>
            Tic-tac-toe
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Button color="success" variant="outlined" size="small">
              Deployed
            </Button>
            <Icon altText="Three dots menu" icon={ThreeDotsIcon} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          {actionButtons.map(({ icon, label, path }) => {
            const isActive = location.pathname.includes(path)

            return (
              <Box
                key={path}
                height={'20px'}
                display={'flex'}
                alignItems={'center'}
                gap={'5px'}
                sx={{ cursor: 'pointer' }}
                onClick={() => handleTabChange(path)}
              >
                <Icon icon={icon} altText="" />
                <Typography
                  fontSize={'14px'}
                  lineHeight={'20px'}
                  fontWeight={isActive ? 700 : 400}
                  noWrap
                >
                  {label}
                </Typography>
              </Box>
            )
          })}
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default Applications
