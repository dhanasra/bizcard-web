import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { PiPlusCircleBold } from 'react-icons/pi'

function FieldsEmpty() {
  return (
    <Box p={3} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        <img src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" alt='empty' width={150}/>
        <Typography variant='caption' sx={{maxWidth: "75%"}}>No fields added yet.</Typography>
        <Button sx={{marginTop: "24px", borderRadius: "32px"}} variant="contained" startIcon={<PiPlusCircleBold/>}>Add New Field</Button>
    </Box>
  )
}

export default FieldsEmpty