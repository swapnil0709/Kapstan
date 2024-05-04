/* eslint-disable @typescript-eslint/no-explicit-any */
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'
import { StyledTable } from './Table.style'
import { TableProps, eventDataProps } from './Table.type'
import { getTimeAgo } from '../../utils/dateTime'
import Tag from '../../components/Tag/Tag'

function createData(
  event: string,
  version: number,
  status: string,
  time: string,
  id: number
) {
  return { event, version, status, time, id }
}
const colStyles = { fontSize: '14px', fontWeight: 700, lineHeight: '20px' }
const textStyles = { fontSize: '14px', fontWeight: 500, lineHeight: '20px' }
const subTextStyles = { fontSize: '12px', fontWeight: 500, lineHeight: '18px' }

export default function BasicTable({ data, appData }: TableProps) {
  const rows: any[] = []
  const tableData = data.slice(0, 4)
  tableData.forEach(
    ({ applicationId, id, status, timestamp, version }: eventDataProps) => {
      const foundApp = appData.find(
        (eachData) => eachData.id === Number(applicationId)
      )
      rows.push(
        createData(
          foundApp?.name || '',
          version,
          status,
          getTimeAgo(timestamp),
          id
        )
      )
    }
  )
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
              key={row.id}
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
                <Tag text={row.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
