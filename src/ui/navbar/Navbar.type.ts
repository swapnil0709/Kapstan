import { AppBarProps } from '@mui/material/AppBar'

export interface NavBarProps extends AppBarProps {
  open?: boolean
  drawerWidth?: number
}
