import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { PiPlusCircleBold } from "react-icons/pi";

function CardsEmpty() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        <Typography variant='h6'>Create New Card</Typography>
        <img src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" alt='empty' width={150}/>
        <Typography variant='caption' sx={{maxWidth: "75%"}}>Create your personalized profile & business cards now.</Typography>
        <Button sx={{my: 3, borderRadius: "32px"}} variant="contained" startIcon={<PiPlusCircleBold/>}>Create New Card</Button>
    </Box>
  )
}

export default CardsEmpty