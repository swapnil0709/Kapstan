import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Dropdown from '../../components/Dropdown/Dropdown'
import { StyledNavBar } from './Navbar.style'
import Avatar from '../../components/Avatar/Avatar'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { NavBarProps } from './Navbar.type'
import { useAppContext } from '../../hooks/useAppContext'
import { SelectChangeEvent } from '@mui/material'
import ActionEnum from '../../state/stateEnum'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const NavBar = ({ open, drawerWidth }: NavBarProps) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const { state, dispatch } = useAppContext()

  const dropDownValue = state.appData?.length
    ? state.appData[state.selectedAppId - 1].name
    : ''
  const handleDropdownChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value
    const foundValue = state.appData.find(
      (eachRecord) => eachRecord.name === selectedValue
    )
    dispatch({
      type: ActionEnum.UPDATE_SELECTED_APP,
      payload: {
        id: foundValue.id,
        name: foundValue.name,
        status: foundValue.status,
      },
    })
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <StyledNavBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Box
        sx={{
          height: '65px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography fontWeight={500} fontSize={'10px'} lineHeight={'16px '}>
              Applications
            </Typography>
            {state.appData && (
              <Dropdown
                value={dropDownValue}
                onChange={handleDropdownChange}
                options={state.appData}
              />
            )}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Avatar name="JD" />
            <Typography
              lineHeight={'20px'}
              color={'#333333'}
              fontWeight={500}
              fontSize={14}
              textAlign={'center'}
            >
              John Doe
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <KeyboardArrowDownIcon fontSize={'large'} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '30px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </StyledNavBar>
  )
}
export default NavBar
