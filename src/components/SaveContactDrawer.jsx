import { Button, CircularProgress, Divider, Drawer, IconButton, Snackbar, SnackbarContent, Stack, TextField, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { PiCopyLight, PiDownloadLight, PiHeartLight } from 'react-icons/pi'
import theme from '../utils/theme';
import html2pdf from 'html2pdf.js';
import { anyNotEmpty, formCardLink } from '../utils/utils';
import { sendContactToMail } from '../network/service/cardService';

function SaveContactDrawer(props) {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;

    const [email, setEmail] = useState('');
    const handleEmailChange =(event)=>{
        const emailValue = event.target.value;
        setEmail(emailValue);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailValue);

        setIsValidEmail(isValid);
    };

    const [buttonLoading, setButtonLoading] = useState(false);

    const [showSnackBar, setShowSnackbar] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const copyInfo = ()=>{
        const contact = props.contact;
        const contactInfo = `
            Profile Details :

            ${contact?.name?.firstName??""} ${contact?.name?.middleName??""} ${contact?.name?.lastName??""},
            ${contact?.address?.addressLine1??""} ${contact?.address?.addressLine2??""} ${contact?.address?.city??""} ${contact?.address?.state??""} ${contact?.address?.country??""} ${contact?.address?.pincode??""}
            ${contact?.email??""}
            ${contact?.phoneNumber??""}

            ------------------------------

            ${ anyNotEmpty(contact?.company??{}) ? 'Company Details :' :'' }

            ${contact?.company?.companyName??""}
            ${contact?.company?.companyWebsite??""}

            ------------------------------

            Connect me at :

            ${formCardLink(contact._id)}
        `
        navigator.clipboard.writeText(contactInfo);
        setToastMessage("Contact copied successfully !");
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

    const shareCard = async() => {
        if (!isValidEmail) {
            setIsValidEmail(false);
            return;
        }
        setButtonLoading(true);
        await sendContactToMail(email, props.contact._id);
        setEmail('');
        setButtonLoading(false);
        setToastMessage("Contact details send to your email address successfully !");
        setShowSnackbar(true);
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
                message={toastMessage}
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


                <TextField label={"Your Email Address"} onChange={handleEmailChange} value={email} error={!isValidEmail} helperText={!isValidEmail ? 'Please enter a valid email address' : ''} fullWidth/>
                
                <Button  variant="contained" onClick={shareCard} sx={{ position: 'relative', height: 40 }} disableElevation fullWidth>
                {
                    buttonLoading 
                    ? <CircularProgress
                    size={24}
                    style={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px', 
                        marginLeft: '-12px',
                    }}/> 
                    : 'Receive Via Email'
                    
                }</Button>

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