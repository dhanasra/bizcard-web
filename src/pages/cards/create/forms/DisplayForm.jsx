import { Box, Typography } from '@mui/material'
import React from 'react'
import DesignPicker from '../../../../components/DesignPicker';
import ThemePicker from '../../../../components/ThemePicker';

function DisplayForm() {

  return (
    <div>

        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Design</Typography>
        </Box>

        <DesignPicker/>

        <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
            <Typography variant="subtitleBold" >Theme</Typography>
        </Box>

        <ThemePicker/>

    </div>
  )
}

export default DisplayForm