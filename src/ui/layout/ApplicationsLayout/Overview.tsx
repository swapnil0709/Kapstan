import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Card from '../../../components/Card/Card'
import { Box, Button, Typography } from '@mui/material'
import successIcon from '../../../assets/Success.svg'
import Icon from '../../../components/Icon/Icon'
import BasicTable from '../../../components/Table/Table'
import { useQueries } from '@tanstack/react-query'
import { useEffect } from 'react'
import { APIS_URL } from '../../../api/urls'
import { fetchData } from '../../../utils/fetchData'

const Overview = () => {
  const results = useQueries({
    queries: APIS_URL.map((url) => ({
      queryKey: ['post', url],
      queryFn: () => fetchData(url),
      staleTime: Infinity,
    })),
  })

  useEffect(() => {
    console.log({ results })
  }, [results])
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <Card
          heading="Service info"
          height="186px"
          padding="16px"
          isCollapsible
        >
          <Box sx={{ marginTop: '15px', display: 'flex', gap: '50px' }}>
            <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
              <Typography
                fontSize={'12px'}
                fontWeight={500}
                lineHeight={'18px'}
              >
                Current version
              </Typography>
              <Box sx={{ display: 'flex', gap: '5px' }}>
                <Icon icon={successIcon} altText="success icon" />
                <Typography
                  fontSize={'14px'}
                  fontWeight={500}
                  lineHeight={'20px'}
                >
                  In sync
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
              <Typography
                fontSize={'12px'}
                fontWeight={500}
                lineHeight={'18px'}
              >
                Desired version
              </Typography>
              <Typography
                fontSize={'16px'}
                fontWeight={500}
                lineHeight={'24px'}
              >
                1.2.1
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: '#6E27D5' }}
            >
              Deploy
            </Button>
            <Typography fontSize={'12px'} fontWeight={500} lineHeight={'18px'}>
              Last updated 5 hours ago{' '}
            </Typography>
          </Box>
        </Card>
      </Grid2>
      <Grid2 xs={6}>
        <Card heading="System metrics" height="396px" padding="24px">
          <>Hello</>
        </Card>
      </Grid2>
      <Grid2 xs={6}>
        <Card heading="Event History" height="396px" padding="24px">
          <BasicTable />
          <Box sx={{ marginTop: '10px' }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#6E27D5',
                textDecoration: 'underline',
                marginLeft: '30px',
                cursor: 'pointer',
              }}
            >
              View more
            </Typography>
          </Box>
        </Card>
      </Grid2>
    </Grid2>
  )
}

export default Overview
