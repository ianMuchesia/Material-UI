import React from 'react'
import Header from '../../components/Header'
import { Box, Grid } from '@mui/material'

import AddDriver from '../../@core/form-layouts/AddDriver'

const Driver = () => {


  return (
    <Box m="1.5rem 2.5rem">
    <Header
      title="Add driver"

      subtitle="Attach a new driver to a vehicle"
    />
    <Box m="2.5rem 0rem">
    <Grid item xs={12}>
         <AddDriver/>
        </Grid>
    </Box>
  </Box>
  )
}

export default Driver