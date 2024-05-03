import { ListItemTextProps } from '@mui/material'

export interface SideBarListItemTextProps extends ListItemTextProps {
  open?: boolean
  isActive?: boolean
}

export type DrawerListItemProps = {
  id: number
  text: string
  icon: React.ReactNode
}[]
