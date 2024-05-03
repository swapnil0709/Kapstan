import { AppBar as NavBar, styled } from '@mui/material'
import { NavBarProps } from './Navbar.type'

export const StyledNavBar = styled(NavBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<NavBarProps>(({ theme, open, drawerWidth }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  borderBottom: '1px solid #EBEBEB',
  color: theme.palette.text.primary,
  zIndex: theme.zIndex.drawer + 1,
  left: `calc(${theme.spacing(9.5)} + 1px)`,
  // marginLeft: `calc(${theme.spacing(9.5)} + 1px)`,
  width: `calc(100% - calc(${theme.spacing(9.5)} + 1px))`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: '144px',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))
