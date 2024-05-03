import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Card from '../../../components/Card/Card'

const Overview = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <Card heading="Service info" height="186px" padding="16px" />
      </Grid2>
      <Grid2 xs={6}>
        <Card heading="System metrics" height="396px" padding="24px" />
      </Grid2>
      <Grid2 xs={6}>
        <Card heading="Event History" height="396px" padding="24px" />
      </Grid2>
    </Grid2>
  )
}

export default Overview
