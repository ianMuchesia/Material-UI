// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { ThemeColor } from '../../@types/types'
import { useTheme } from '@mui/material'
import { ThemeOptions } from '../../@types/pallette'

// ** Types Imports


interface RowType {
  age: number
  name: string
  date: string
  email: string
  shortcode: string
  status: string
  designation: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    age: 27,
    status: 'pending',
    date: '09/27/2023',
    name: 'Sally Quinn',
   shortcode: '19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Problem with ...'
  },
  {
    age: 61,
    date: '09/23/2023',
    shortcode: '23896.35',
    status: 'NotResolved',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Problem with ...'
  },
  {
    age: 59,
    date: '10/15/2022',
    name: 'Minnie Roy',
    status: 'NotResolved',
    shortcode: '18991.67',
    email: 'ediehn6@163.com',
    designation: 'Problem with ...'
  },
  {
    age: 30,
    date: '06/12/2023',
    status: 'pending',
    shortcode: '19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
   designation: 'Problem with ...'
  },
  {
    age: 66,
    status: 'resolved',
    date: '03/24/2023',
    shortcode: '13076.28',
    name: 'Annie Martin',
    designation: 'Problem with ...',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    age: 33,
    date: '08/25/2022',
    shortcode: '10909.52',
    name: 'Adeline Day',
    status: 'NotResolved',
    email: 'hnisius4@gnu.org',
    designation: 'Problem with ...'
  },
  {
    age: 61,
    status: 'pending',
    date: '06/01/2022',
    shortcode: '17803.80',
    name: 'Lora Jackson',
    designation: 'Problem with ...',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2023',
    shortcode: '12336.17',
    name: 'Rodney Sharp',
    status: 'NotResolved',
    designation: 'Problem with ...',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj: StatusObj = {
 
  resolved: { color: 'success' },
  pending: { color: 'primary' },
  NotResolved: { color: 'error' },
  
}

const ComplaintTable = () => {

    const theme = useTheme() as ThemeOptions;
  return (
    <Card    sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Shortcode</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.shortcode}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status]?.color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default ComplaintTable
