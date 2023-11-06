import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function Step4() {
  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Enter your phone number</Typography>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <TextField label={"Phone Number"} fullWidth/>
        </Box>
    </Box>
  )
}

export default Step4