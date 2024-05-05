import React from 'react'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'

interface DrawerCommonProps extends DrawerProps {
  open: boolean
  anchor: 'left' | 'right'
  width?: number | string
  zIndex?: number
  children: React.ReactNode
}

const Drawer: React.FC<DrawerCommonProps> = ({
  open,
  anchor,
  width = '696px',
  children,
  zIndex = 1202,
  ...rest
}) => {
  return (
    <MuiDrawer
      sx={{
        zIndex: zIndex,
        '& .MuiPaper-root': {
          width: { width },
          zIndex: zIndex,
          padding: '40px 32px 24px 32px',
          boxShadow: '-16px 0px 12px 0px rgba(0, 0, 0, 0.08)',
        },
      }}
      anchor={anchor}
      open={open}
      hideBackdrop
      {...rest}
    >
      {children}
    </MuiDrawer>
  )
}

export default Drawer
