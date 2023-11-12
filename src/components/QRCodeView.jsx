import { Box } from '@mui/material'
import React from 'react'
import { QRCode } from 'react-qrcode-logo'
import theme from '../utils/theme'
import logoBg from '../assets/logo/logo-bg.png'

function QRCodeView({cardId}) {
  return (
    <Box sx={{
        m: 3,
        width: "170px",
        height: "170px",
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
            width: "200px",
            height: "200px",
        }}/>

        <Box
            sx={{
                position: "absolute",
                padding: "10px"
            }}
        >
            <QRCode
                quietZone={0}
                value={`http://localhost:3000/app/p/card/${cardId}`}
                logoImage={logoBg}  
                eyeRadius={[[10, 10, 0, 10], [10, 10, 10, 0], [10, 0, 10, 10]]}
                qrStyle='dots'
                eyeColor={theme.palette.secondary.main}
            />
        </Box>
    </Box>
  )
}

export default QRCodeView