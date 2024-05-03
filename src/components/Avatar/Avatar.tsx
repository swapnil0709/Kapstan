import MuiAvatar from '@mui/material/Avatar'
import MuiTypography from '@mui/material/Typography'

const Avatar = ({ name }: { name: string }) => {
  return (
    <MuiAvatar
      alt={name}
      sx={{
        backgroundColor: (theme) => theme.palette.warning.main,
      }}
    >
      <MuiTypography fontSize={18} fontWeight={700} lineHeight={'28px'}>
        {name}
      </MuiTypography>
    </MuiAvatar>
  )
}

export default Avatar
