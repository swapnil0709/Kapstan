import { Box, Typography } from '@mui/material'

const Card = ({
  heading,
  height,
  boxShadow,
  padding,
}: {
  heading: string
  height: string
  boxShadow?: string
  padding?: string
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
      <Typography
        fontWeight={700}
        fontSize={'16px'}
        lineHeight={'24px'}
        color={'rgba(89, 89, 89, 1)'}
      >
        {heading}
      </Typography>
    </Box>
  )
}

export default Card
