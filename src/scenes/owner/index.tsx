import React, { useState } from 'react'
import { FormControl, MenuItem, InputLabel, Box, Select, Grid } from "@mui/material";
import Header from '../../components/Header';
import OverViewChart from '../../components/OverViewChart';
import AddOwner from '../../@core/form-layouts/AddOwner';


const Owner = () => {

  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
    <Header
      title="Vehicle and Owner"

      subtitle="Adding a new owner and a vehicle"
    />
    <Box m="2.5rem 0rem">
    <Grid item xs={12}>
         <AddOwner/>
        </Grid>
    </Box>
  </Box>
  )
}

export default Owner