import { Box, Button, Typography } from '@mui/material'
import ThreeDotsIcon from '../assets/Vertical.svg'
import Icon from '../components/Icon/Icon'
import historyIcon from '../assets/History.svg'
import monitorIcon from '../assets/Monitor.svg'
import triangleIcon from '../assets/Triangle.svg'
import buildIcon from '../assets/Build.svg'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import { useEffect } from 'react'
import ActionEnum from '../state/stateEnum'
import axios from '../api/axiosConfig'
import { APPS_URL } from '../api/urls'

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
  const { state, dispatch } = useAppContext()
  const handleTabChange = (path: string) => {
    navigate(path)
  }

  const fetchData = async () => {
    const data = await axios.get(APPS_URL)
    const defaultData = data.data[0]
    dispatch({ type: ActionEnum.STORE_APP_DATA, payload: data.data })
    dispatch({
      type: ActionEnum.UPDATE_SELECTED_APP,
      payload: {
        id: defaultData.id,
        name: defaultData.name,
        status: defaultData.status,
      },
    })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography fontSize={'20px'} fontWeight={700} lineHeight={'24px'}>
            {state.selectedAppName}
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Button color="success" variant="outlined" size="small">
              {state.selectedAppStatus}
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
