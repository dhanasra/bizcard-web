import { Box, Grid } from '@mui/material'
import React from 'react'
import HorizontalBarChart from '../../../../components/charts/HorizontalBarChart';

function AnalyticsTabPanel() {

  const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 15 },
    { label: 'C', value: 20 }
  ];

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Box sx={{width: "100%"}}>
            <HorizontalBarChart data={data} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AnalyticsTabPanel