import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, Typography } from '@mui/material'
import { StyledTable } from './Table.style'

function createData(
  event: string,
  version: number,
  status: string,
  time: string
) {
  return { event, version, status, time }
}

const rows = [
  createData('Frozen yoghurt', 1.21, 'In Progress', '1 minute ago'),
  createData('Ice cream sandwich', 1.22, 'In Progress', '1 minute ago'),
  createData('Eclair', 1.23, 'In Progress', '1 minute ago'),
  createData('Cupcake', 2.1, 'In Progress', '1 minute ago'),
]
const colStyles = { fontSize: '14px', fontWeight: 700, lineHeight: '20px' }
const textStyles = { fontSize: '14px', fontWeight: 500, lineHeight: '20px' }
const subTextStyles = { fontSize: '12px', fontWeight: 500, lineHeight: '18px' }
export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...colStyles, paddingLeft: '30px' }} align="left">
              Event
            </TableCell>
            <TableCell sx={colStyles} align="left">
              Version
            </TableCell>
            <TableCell sx={colStyles} align="left">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.version} //TODO: Replace key with id
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    paddingLeft: '22px',
                  }}
                >
                  <Typography sx={textStyles}>{row.event}</Typography>
                  <Typography sx={subTextStyles}>{row.time}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={textStyles} align="left">
                {row.version}
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="warning">
                  {row.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
