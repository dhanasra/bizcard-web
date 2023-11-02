import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function GeneralForm() {
  return (
    <div>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Profile</Typography>
        </Box>
        <Grid container columnSpacing={4} rowSpacing={3.5}>
            <Grid item xs={6} md={6}>
                <TextField label={"First Name"} fullWidth/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField label={"Last Name"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Middle Name"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Prefix"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Phone Number"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Email Address"} fullWidth/>
            </Grid>
        </Grid>

        <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
            <Typography variant="subtitleBold" >Location</Typography>
        </Box>
        <Grid container columnSpacing={4} rowSpacing={3.5}>
            <Grid item xs={12} >
                <TextField label={"Address Line 1"} fullWidth/>
            </Grid>
            <Grid item xs={12} >
                <TextField label={"Address Line 2"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"city"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"State"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Country"} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Pincode"} fullWidth/>
            </Grid>
        </Grid>
    </div>
  )
}

export default GeneralForm