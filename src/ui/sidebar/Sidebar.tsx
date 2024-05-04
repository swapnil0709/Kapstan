import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import NavBar from '../navbar/Navbar'
import {
  StyledDivider,
  StyledDrawer,
  StyledListItemText,
  StyledSidebar,
  centerStyle,
} from './Sidebar.style'
import { DRAWER_WIDTH } from './constants'
import KapstanLogo from '../../assets/Kapstan.svg'
import KapstanLogoOnly from '../../assets/OnlyLogo.svg'
import { DrawerListItemProps } from './Sidebar.type'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import connectionIcon from '../../assets/Link.svg'
import appsIcon from '../../assets/Apps.svg'
import costIcon from '../../assets/Money.svg'
import securityIcon from '../../assets/Shield.svg'
import docsIcon from '../../assets/Docs.svg'
import adminIcon from '../../assets/User.svg'
import leftIcon from '../../assets/Left.svg'
import rightIcon from '../../assets/Right.svg'

const APPS_SECTION = [
  {
    id: 1,
    text: 'Applications',
    icon: <Icon altText="Applications Icon" icon={appsIcon} />,
  },
]
const PAGES_SECTION = [
  {
    id: 2,
    text: 'Connections',
    icon: <Icon altText="Connections Icon" icon={connectionIcon} />,
  },
  {
    id: 3,
    text: 'Cost',
    icon: <Icon altText="Cost Icon" icon={costIcon} />,
  },
  {
    id: 4,
    text: 'Security',
    icon: <Icon altText="Security Icon" icon={securityIcon} />,
  },
]
const ADMIN_SECTION = [
  {
    id: 5,
    text: 'Admin',
    icon: <Icon altText="Admin Icon" icon={adminIcon} />,
  },
  {
    id: 6,
    text: 'Docs',
    icon: <Icon altText="Docs Icon" icon={docsIcon} />,
  },
]
const DRAWER_CLOSE = [
  {
    id: 8,
    text: '',
    icon: <Icon altText="Drawer close Icon" icon={leftIcon} />,
  },
]
const DRAWER_OPEN = [
  {
    id: 9,
    text: '',
    icon: <Icon altText="Drawer open Icon" icon={rightIcon} />,
  },
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const SideBar = ({ children }: { children: React.ReactElement }) => {
  const [open, setOpen] = React.useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const handleTabClick = (route: string) => {
    if (!route) {
      setOpen((prev) => !prev)
      return
    }
    navigate(route.toLowerCase())
  }
  const getDrawerItem = (array: DrawerListItemProps) => {
    return (
      <List sx={centerStyle}>
        {array.map(({ id, text, icon }) => {
          const isActive =
            text && location.pathname.includes(text.toLowerCase())
          return (
            <ListItem key={id} disablePadding sx={centerStyle}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: isActive ? '#4D1B95' : '#37146B',
                  width: '188px',
                  height: '44px',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#4D1B95',
                  },
                }}
                onClick={() => handleTabClick(text)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 0,
                    justifyContent: 'center',
                    '& .MuiSvgIcon-root': {
                      fontSize: '2.5rem',
                      color: '#fff',
                    },
                  }}
                >
                  {icon}
                </ListItemIcon>
                {open && (
                  <StyledListItemText
                    primary={text}
                    open={open}
                    isActive={!!isActive}
                  />
                )}
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    )
  }

  return (
    <StyledSidebar>
      <CssBaseline />
      <NavBar open={open} drawerWidth={DRAWER_WIDTH} />
      <StyledDrawer variant="permanent" open={open}>
        <Box>
          <DrawerHeader
            sx={{
              ...centerStyle,
              mr: open ? '30px' : 0,
            }}
          >
            <Icon
              altText="Kapstan logo"
              icon={open ? KapstanLogo : KapstanLogoOnly}
            />
          </DrawerHeader>
          <StyledDivider />
          {getDrawerItem(APPS_SECTION)}
          <StyledDivider />
          {getDrawerItem(PAGES_SECTION)}
          <StyledDivider />
        </Box>
        <Box>
          {getDrawerItem(ADMIN_SECTION)}
          <StyledDivider />
          {getDrawerItem(open ? DRAWER_CLOSE : DRAWER_OPEN)}
        </Box>
      </StyledDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </StyledSidebar>
  )
}

export default SideBar
