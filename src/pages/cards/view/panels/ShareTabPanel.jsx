import { Box, Button, Divider, IconButton, Snackbar, SnackbarContent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import QRCodeView from '../../../../components/QRCodeView'
import { BiLogoFacebookCircle, BiLogoGmail, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import { PiCopyLight } from 'react-icons/pi';
import { useLocation } from 'react-router-dom';
import { formCardLink } from '../../../../utils/utils';

function ShareTabPanel() {

    const {state} = useLocation();
    const card = state.card;

    const [showSnackBar, setShowSnackbar] = useState(false);

    const copyLink = ()=>{
        const cardLink = formCardLink(card._id);
        navigator.clipboard.writeText(cardLink);
        setShowSnackbar(true);
    }

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
        <Snackbar
            open={showSnackBar}
            autoHideDuration={1500}
            onClose={()=>{setShowSnackbar(false)}}
            severity="success"
        >
            <SnackbarContent
                sx={{
                    backgroundColor: "#139F20"
                }}
                message={"Card link copied successfully !"}
            />
        </Snackbar>
        <div id="qrcode-container">
            <QRCodeView cardId={card._id}/>
        </div>
        <Typography variant="body2">Scan or Tap on the QR Code to preview.</Typography>
        <Button
            onClick={copyLink}
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