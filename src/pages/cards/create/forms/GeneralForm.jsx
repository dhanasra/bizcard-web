import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function GeneralForm() {
  return (
    <div>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Profile</Typography>
        </Box>
        <Grid container columnSpacing={8} rowSpacing={3.5}>
            <Grid item xs={6} >
                <TextField label={"First Name"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Last Name"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Middle Name"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Prefix"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Suffix"} fullWidth/>
            </Grid>
        </Grid>

        <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
            <Typography variant="subtitleBold" >Affiliation</Typography>
        </Box>
        <Grid container columnSpacing={8} rowSpacing={3.5}>
            <Grid item xs={6} >
                <TextField label={"Title"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Department"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Company"} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Company"} fullWidth/>
            </Grid>
        </Grid>
    </div>
  )
}

export default GeneralForm