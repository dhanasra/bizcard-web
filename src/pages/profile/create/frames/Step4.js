import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function Step4() {
  return (
    <Box sx={{minHeight: "300px", p: 2}}>
        <Typography variant="subtitle" color="bgGrey">Enter your phone number</Typography>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <Typography variant="label" >Phone Number</Typography>
            <TextField size="small" fullWidth/>
        </Box>
    </Box>
  )
}

export default Step4