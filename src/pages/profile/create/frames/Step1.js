import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function Step1() {
  return (
    <Box sx={{minHeight: "300px", p: 2}}>
        <Typography variant="subtitle" color="bgGrey">Hi, Tell us about you</Typography>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <Typography variant="label" >First Name</Typography>
            <TextField size="small" fullWidth/>
        </Box>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <Typography variant="label" >Last Name</Typography>
            <TextField size="small" fullWidth/>
        </Box>
    </Box>
  )
}

export default Step1