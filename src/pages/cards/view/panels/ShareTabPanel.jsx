import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import QRCodeView from '../../../../components/QRCodeView'
import { BiLogoFacebookCircle, BiLogoGmail, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import { PiCopyLight } from 'react-icons/pi';

function ShareTabPanel() {
  return (
    <Box
        sx={{
            p: 3,
            width: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
    >

        <QRCodeView/>
        <Typography variant="body2">Scan or Tap on the QR Code to preview.</Typography>
        <Button
            variant="contained"
            startIcon={<PiCopyLight/>}
            sx={{
                m: 3
            }}
        >
            Copy Link
        </Button>
        
        <Divider sx={{width: "250px" , marginBottom: "16px" }}>
            <Typography variant="body2" >Share to</Typography>
        </Divider>

        
        
        <Stack direction={"row"}>
            <IconButton>
                <BiLogoGmail fontSize={"32px"} color="#BB001B"/>
            </IconButton>
            <IconButton>
                <BiLogoFacebookCircle fontSize={"32px"} color="#4267B2"/>
            </IconButton>
            <IconButton>
                <BiLogoInstagramAlt fontSize={"32px"} color="#F56040"/>
            </IconButton>
            <IconButton>
                <BiLogoLinkedinSquare fontSize={"32px"} color="#0077B5"/>
            </IconButton>

        </Stack>

    </Box>
  )
}

export default ShareTabPanel