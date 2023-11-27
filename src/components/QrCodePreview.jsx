import { Box, Button, Typography} from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import QRCodeView from './QRCodeView';
import { PiDownloadLight } from 'react-icons/pi';

const useStyle = makeStyles({
    outerbox: {
        marginTop: "16px",
        marginRight: "16px",
        display: "flex",
        height: "100%",
        overflow: "auto",
        background: "#fff", 
        padding: "16px",
        boxShadow: "0px 2px 30px #ccc6",
        boxSizing: "border-box",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
            display: "none",
          },
    },
    screen: {
        borderRadius: "4px",
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    content: {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
    },
    gapLess: {
        background: "none",
        margin: "16px",
        padding: "0px"
    },
    previewContainer: {
        minHeight: "100%",
        height: "100%",
        backgroundColor: "#fff",
        border: "1px solid rgb(189, 189, 189)",
        borderRadius: "25px 25px 0 0",
        flexGrow: 1,
        boxSizing: "border-box"
    }
})

function QrCodePreview({cardData, removeGap}) {

  const classes = useStyle();

  return (
    <Box className={`${ removeGap && classes.gapLess} ${classes.outerbox} `}>
        <div className={classes.previewContainer}>
        <Box className={classes.screen}>

            <Typography variant='titleBold'>My QR Code</Typography>
            <Typography variant='labelLight'>Your customized qr code</Typography>

            <div style={{height: '16px'}}/>
            
            <div id="qrcode-container">
                <QRCodeView 
                    cardId={'test'} 
                    logo={cardData?.qr?.logo}
                    qrStyle={cardData?.qr?.codeStyle}
                    fgColor={cardData?.qr?.fgColor}
                    eyeColor={cardData?.qr?.eyeColor}
                    eyeStyle={cardData?.qr?.eyeStyle}
                />
            </div>

            <Button sx={{my: 3, borderRadius: "32px"}} variant="contained" startIcon={<PiDownloadLight/>}>Download QR code</Button>

        </Box>
        </div>
    </Box>
  )
}

export default QrCodePreview