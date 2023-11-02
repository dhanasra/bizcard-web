import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../utils/theme';

function ColorPicker() {

    const colors = ["#8F60DE", "#3A59AE", "#628AF8", "#6DD3C7", "#3BB55D", "#FFC631", "#FF8C39", "#EA3A2E", "#EE85DD", "#4A4A4A"];

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{display: "flex", width: isSmallScreen? window.innerWidth-48: "100%", overflow: "auto", p: 1}}>
        {
            colors.map((color)=>{
                return <Box sx={{background: color, borderRadius: "4px", marginRight: "16px"}}>
                    <Box sx={{background: "#fff", borderRadius: "4px", padding: "2px", margin: "1px"}}>
                        <Box sx={{ background: color, borderRadius: "4px", width: 32, height: 32 }}></Box>
                    </Box>
                </Box>
            })
        }
    </Box>  
  )
}

export default ColorPicker