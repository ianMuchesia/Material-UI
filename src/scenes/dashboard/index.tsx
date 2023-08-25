import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import CardStatisticsVerticalComponent from '../../@core/card-statistics/card-stats-vertical'
import { Announcement, CarRental, DirectionsCar, Handyman, Poll } from '@mui/icons-material'
import { BriefcaseVariantOutline, CurrencyUsd, HelpCircleOutline } from 'mdi-material-ui'

const Dashboard = () => {
  return (
   <Box m="1.5rem 2.5rem">
  <Header title="Dashboard" subtitle="Statistics of your company" />
  <Grid m="2.5rem 0rem" item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} lg={4}>
              <CardStatisticsVerticalComponent
                stats='20'
                icon={<DirectionsCar />}
                
                trendNumber=''
                title='Vehicles'
                subtitle='Total number of vehicles'
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <CardStatisticsVerticalComponent
                stats='12'
                title='Owners'
                trend='negative'
               
                trendNumber=''
                subtitle='Total number of vehicles owners'
                icon={<Handyman />}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber=''
                title='Drivers'
                subtitle='Total number of drivers'
                icon={<CarRental />}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='error'
                trend='negative'
                trendNumber=''
                subtitle='Total number of complaints'
                title='Complaints'
                icon={<Announcement />}
              />
            </Grid>
          </Grid>
        </Grid>

   </Box>
  )
}

export default Dashboard