import { Box, Typography } from '@mui/material'
import React from 'react'
import DesignPicker from '../../../../components/DesignPicker';

function DisplayForm() {

  return (
    <div>

        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Design</Typography>
        </Box>

        <DesignPicker/>

    </div>
  )
}

export default DisplayForm