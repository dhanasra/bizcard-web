import { Button, Divider, Drawer, IconButton, Snackbar, SnackbarContent, Stack, TextField, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { PiCopyLight, PiDownloadLight, PiHeartLight } from 'react-icons/pi'
import theme from '../utils/theme';
import { objectToTextReadableFormat } from '../utils/utils';
import html2pdf from 'html2pdf.js';

function SaveContactDrawer(props) {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;

    const [email, setEmail] = useState('');
    const handleEmailChange =(event)=>setEmail(event.target.value);

    const [showSnackBar, setShowSnackbar] = useState(false);

    const copyInfo = ()=>{
        const contactInfo = objectToTextReadableFormat(props.contact)
        navigator.clipboard.writeText(contactInfo);
        setShowSnackbar(true);
    }

    const pdfOptions = {
        margin: 0,
        filename: 'my-pdf.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3},
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const downloadCard = () => {
        const element = document.getElementById('contact-preview-container');
        
        html2pdf ()
            .from(element)
            .set(pdfOptions)
            .save();
    };

    const shareCard = () => {
        props.onShare();
    }


  return (
    <div>
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
                message={"Contact copied successfully !"}
            />
        </Snackbar>
        <Drawer
            open={props.open} 
            anchor="right"
            sx={{
                padding: "20px",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    maxWidth: "460px",
                    width: isSmallScreen ? '100%': width
                },
            }}
        >

            <Toolbar sx={{px: 1, justifyContent: "space-between", boxShadow: 1}} variant='dense' >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <PiHeartLight fontSize={'24px'} style={{marginRight: "16px"}}/>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Save Contact</Typography>
                </div>
                <IconButton onClick={()=>props.onClose()}>
                    <FiX fontSize={"22px"} />
                </IconButton>
            </Toolbar>

            <Stack px={3} py={5} spacing={4}>


                <TextField label={"Your Email Address"} onChange={handleEmailChange} value={email} fullWidth/>
                
                <Button  variant="contained" onClick={shareCard} disableElevation fullWidth>Receive Via Email</Button>

                <Divider>
                    <Typography variant="body2" >Or</Typography>
                </Divider>

                <Stack direction={"row"} spacing={2}>
                    <Button onClick={copyInfo} startIcon={<PiCopyLight/>}  variant="outlined" disableElevation fullWidth>Copy Info</Button>
                    <Button onClick={downloadCard} startIcon={<PiDownloadLight/>} variant="outlined" disableElevation fullWidth>Download Info</Button>
                </Stack>

            </Stack>

        </Drawer>
    </div>
  )
}

export default SaveContactDrawer