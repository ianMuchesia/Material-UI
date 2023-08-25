import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import VehicleTable from '../../@core/tables/VehicleTable'

const ViewVehicle = () => {
  return (
    <Box m="1.5rem 2.5rem">
    <Header title="VEHICLES" subtitle="See your list of vehicles and owners."/>
    <VehicleTable/>
    </Box>
  )
}

export default ViewVehicle