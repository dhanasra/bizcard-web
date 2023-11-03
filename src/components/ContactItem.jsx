import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactItem() {

    const navigate = useNavigate();

  return (
    <Box
        onClick={()=>navigate('/app/contacts/view')}
        sx={{
            cursor: "pointer",
            background: "#fff", 
            height: "200px", 
            width: "100%", 
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 2px 30px #ccc6"
        }}
    >
        <Box sx={{display: "flex", flexDirection: "column", width: "100%"}} >
            <Box
                sx={{
                    width: "100%",
                    height: "28px",
                    background: "#556080",
                    borderRadius: "16px 16px 0 0"
                }}
            />
            <div style={{height: "60px"}}>
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,180 C150,100 350,0 600,00 L500,00 L0,0 Z" style={{stroke: "none", fill:"#556080"}}></path>
                </svg>     
            </div>    
        </Box> 

        <Box p={2}>
            <Stack>
                <Typography variant="body1">Dhana Sekaran R</Typography>
                <Typography variant="caption">Flutter Dev</Typography>
                <Typography variant="caption">Instrive Softlabs Pvt Ltd</Typography>
            </Stack>
        </Box>

    </Box>
  )
}

export default ContactItem