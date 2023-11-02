import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import RichTextEditor from '../../../../components/RichTextEditor';

function BusinessForm() {

  return (
    <div style={{width: "100%"}}>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Profile</Typography>
        </Box>
        <Grid container columnSpacing={4} rowSpacing={3.5}>
            <Grid item xs={6} >
                <TextField label={"Title"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Department"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Company Name"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Company Website"} fullWidth/>
            </Grid>
        </Grid>
        <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
              <Typography variant="subtitleBold" >Business Description</Typography>
        </Box>
        <RichTextEditor />
    </div>
  )
}

export default BusinessForm