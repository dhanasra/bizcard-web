import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Step2() {
  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Add your title and company</Typography>
        <Stack spacing={2} sx={{margin: "24px 0 32px 0"}}>
            <TextField label={"Title"} fullWidth/>
            <TextField label={"Company"} fullWidth/>
        </Stack>
    </Box>
  )
}

export default Step2