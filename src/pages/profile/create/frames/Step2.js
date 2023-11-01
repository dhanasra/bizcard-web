import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function Step2() {
  return (
    <Box sx={{minHeight: "300px", p: 2}}>
        <Typography variant="subtitle" color="bgGrey">Add your title and company</Typography>
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

export default Step2