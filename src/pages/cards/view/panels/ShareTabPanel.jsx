import { Box, Button, Divider, IconButton, Snackbar, SnackbarContent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import QRCodeView from '../../../../components/QRCodeView'
import { PiCopyLight } from 'react-icons/pi';
import { useLocation } from 'react-router-dom';
import { formCardLink } from '../../../../utils/utils';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import EmailImg from '../../../../assets/social/email.png';
import FacebookImg from '../../../../assets/social/facebook.png';
import LinkedInImg from '../../../../assets/social/linkedin.png';
import WhatsappImg from '../../../../assets/social/whatsapp.png';

function ShareTabPanel() {

    const {state} = useLocation();
    const card = state.card;

    const [showSnackBar, setShowSnackbar] = useState(false);
    const cardLink = formCardLink(card._id);

    const copyLink = ()=>{
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
                <EmailShareButton url={cardLink} quote={"Hello from bizcard!"}>
                    <img src={EmailImg} width={32} height={32} alt={''}/>
                </EmailShareButton>
            </IconButton>
            <IconButton>
                <FacebookShareButton url={cardLink} quote={"Hello from bizcard!"}>
                    <img src={FacebookImg} width={32} height={32} alt={''}/>
                </FacebookShareButton>
            </IconButton>
            <IconButton>
                <WhatsappShareButton url={cardLink} quote={"Hello from bizcard!"}>
                    <img src={WhatsappImg} width={32} height={32} alt={''}/>
                </WhatsappShareButton>
            </IconButton>
            <IconButton>
                <LinkedinShareButton url={cardLink} quote={"Hello from bizcard!"}>
                    <img src={LinkedInImg} width={32} height={32} alt={''}/>
                </LinkedinShareButton>
            </IconButton>

        </Stack>

    </Box>
  )
}

export default ShareTabPanel