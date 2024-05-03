import { Box, Divider, Drawer, ListItemText, styled } from '@mui/material'
import { DRAWER_WIDTH } from './constants'
import { Theme, CSSObject } from '@mui/material/styles'
import { SideBarListItemTextProps } from './Sidebar.type'

export const StyledSidebar = styled(Box)(() => ({
  height: '100vh',
  display: 'flex',
}))

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9.5)} + 1px)`,
  },
})

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
  '& .MuiPaper-root.MuiDrawer-paper': {
    backgroundColor: '#37146B',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}))

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isActive',
})<SideBarListItemTextProps>(({ open, isActive }) => ({
  lineHeight: '20px',
  color: '#fff',
  display: open ? 'block' : 'none',
  '& .MuiTypography-root': {
    fontSize: '14px',
    fontWeight: isActive ? 700 : 500,
  },
}))

export const StyledDivider = styled(Divider)(() => ({
  borderColor: '#4D1B95',
}))

export const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
