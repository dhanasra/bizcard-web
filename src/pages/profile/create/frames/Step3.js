import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function Step3() {
  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Upload your profile picture</Typography>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <Typography variant="label" >Title</Typography>
            <TextField size="small" fullWidth/>
        </Box>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <Typography variant="label" >Company</Typography>
            <TextField size="small" fullWidth/>
        </Box>
    </Box>
  )
}

export default Step3