import { Typography } from '@mui/material'
import { StyledTag, StyledDot } from '../../styles/GlobalStyles'

const Tag = ({ text }: { text: string }) => {
  let color = ''
  let bgColor = ''
  let width = ''
  switch (text.toLowerCase()) {
    case 'deployed':
      color = '#00B88C'
      bgColor = '#F0FCF9'
      text = 'Deployed'
      break
    case 'successful':
      color = '#00B88C'
      bgColor = '#F0FCF9'
      text = 'Successful'
      width = '94px'
      break
    case 'in_progress':
      color = '#F39C12'
      bgColor = '#FEF5E6'
      text = 'In progress'
      width = '100px'
      break
    case 'failed':
      color = '#E91F04'
      bgColor = '#FEF4F2'
      text = 'Failed'
      width = '66px'
      break
    default:
  }
  return (
    <StyledTag color={color} bgColor={bgColor} width={width}>
      <StyledDot color={color} />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          color: { color },
        }}
      >
        {text}
      </Typography>
    </StyledTag>
  )
}

export default Tag
