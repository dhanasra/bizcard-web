import { Box } from '@mui/material'
import React from 'react'
import { QRCode } from 'react-qrcode-logo'
import theme from '../utils/theme'
import logoBg from '../assets/logo/logo-bg.png'

function QRCodeView({cardId, qrStyle, fgColor, eyeColor, eyeStyle, logo}) {

    const eyeRadius = eyeStyle==='leaf'
        ? [[10, 10, 0, 10], [10, 10, 10, 0], [10, 0, 10, 10]]
        : eyeStyle==='square'
        ? [0, 0, 0]
        : eyeStyle==='circle'
        ? [10, 10, 10]
        : [[10, 10, 0, 10], [10, 10, 10, 0], [10, 0, 10, 10]];

  return (
    <Box sx={{
        m: 3,
        width: "200px",
        height: "200px",
        position: "relative",
        border: "1px dashed grey",
        borderRadius: "8px",
    }}>

        <Box 
        sx={{
            background: "#fff",
            borderRadius: "100px",
            position: "absolute",
            left: -15,
            top: -15,
            width: "230px",
            height: "230px",
        }}/>

        <Box
            sx={{
                position: "absolute",
                padding: "16px"
            }}
        >
            <QRCode
                quietZone={0}
                size={168}
                logoWidth={168 * 0.3}
                logoHeight={168 * 0.3}
                fgColor={fgColor ?? '#000'}
                value={`${window.origin}/app/p/card/${cardId}`}
                logoImage={logo ?? logoBg}  
                eyeRadius={eyeRadius}
                qrStyle= {qrStyle ?? 'dots'}
                eyeColor={ eyeColor ?? theme.palette.secondary.main}
            />
        </Box>
    </Box>
  )
}

export default QRCodeView