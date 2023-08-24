import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import AddDriver from '../../@core/form-layouts/AddDriver'
import AddComplaint from '../../@core/form-layouts/AddComplaint'

const Complaint = () => {
  return (
    <Box m="1.5rem 2.5rem">
    <Header
      title="Add Complaint"

      subtitle="Add details of the complaint"
    />
    <Box m="2.5rem 0rem">
    <Grid item xs={12}>
         <AddComplaint/>
        </Grid>
    </Box>
  </Box>
  )
}

export default Complaint