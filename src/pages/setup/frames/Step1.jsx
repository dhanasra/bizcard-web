import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Step1() {
  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Hi, Tell us about you</Typography>
        <Stack spacing={2} sx={{margin: "24px 0 32px 0"}}>
            <Stack spacing={2} direction={"row"}>
                <TextField label={"First Name"} fullWidth/>
                <TextField label={"Last Name"} fullWidth/>
            </Stack>
            <TextField label={"Email Address"} fullWidth/>
        </Stack>
    </Box>
  )
}

export default Step1