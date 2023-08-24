import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import CardStatisticsVerticalComponent from '../../@core/card-statistics/card-stats-vertical'
import { Poll } from '@mui/icons-material'
import { BriefcaseVariantOutline, CurrencyUsd, HelpCircleOutline } from 'mdi-material-ui'

const Dashboard = () => {
  return (
   <Box m="1.5rem 2.5rem">
  <Header title="Dashboard" subtitle="Statistics of your company" />
  <Grid m="2.5rem 0rem" item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>

   </Box>
  )
}

export default Dashboard