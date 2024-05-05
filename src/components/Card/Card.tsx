import { Box, Typography } from '@mui/material'

const Card = ({
  heading,
  height,
  boxShadow,
  padding,
  children,
  actionIcons,
}: {
  heading: string
  height: string
  boxShadow?: string
  padding?: string
  children: React.ReactNode
  actionIcons?: React.ReactNode
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: { padding },
        border: '1px solid rgba(235, 235, 235, 1)',
      }}
      boxShadow={boxShadow}
      height={height}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          fontWeight={700}
          fontSize={'16px'}
          lineHeight={'24px'}
          color={'rgba(89, 89, 89, 1)'}
        >
          {heading}
        </Typography>
        {actionIcons}
      </Box>
      {children}
    </Box>
  )
}

export default Card
