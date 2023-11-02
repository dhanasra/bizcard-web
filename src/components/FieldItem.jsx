import { Close } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { FiFacebook, FiInfo, FiMenu } from 'react-icons/fi'

function FieldItem() {
  return (
    <Box
        m={1}
        p={2}
        sx={{
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0px 2px 30px #ccc6"
        }}
    >
        <Box sx={{marginBottom: "20px", display: "flex",alignItems: "center"}}>
            <FiMenu fontSize={24}/>
            <Typography mx={2} sx={{flexGrow: 1}}>Facebook</Typography>
            <IconButton>
                <Close/>
            </IconButton>
        </Box>
            <TextField
            label={"Link / Web Address"} 
            sx={{marginBottom: "16px"}}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <FiFacebook />
                    </InputAdornment>
                ),
            }}
            fullWidth />
            <TextField 
            label={"Display Text"} 
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <FiInfo />
                    </InputAdornment>
                ),
            }}
            fullWidth/>
    </Box>
  )
}

export default FieldItem