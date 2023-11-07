import { Close } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { FiInfo, FiMenu } from 'react-icons/fi'

function FieldItem({field, onCancel, onValueChange, onNameChange}) {

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
            <Typography mx={2} sx={{flexGrow: 1}}>{field.label}</Typography>
            <IconButton onClick={()=>onCancel(field._id)}>
                <Close/>
            </IconButton>
        </Box>
            <TextField
            label={"Link / Web Address"} 
            sx={{marginBottom: "16px"}}
            value={field.value??""} 
            onChange={(event)=>onValueChange(field._id, event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/bizcard-web.appspot.com/o/${field.icon}`} width={24} height={24} alt={""}/>
                    </InputAdornment>
                ),
            }}
            fullWidth />
            <TextField 
            label={"Display Text"} 
            value={field.name??""} 
            onChange={(event)=>onNameChange(field._id, event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <Box sx={{padding: "2px 3px", display: "flex"}}>
                        <FiInfo size={"18px"}/>
                    </Box>
                    </InputAdornment>
                ),
            }}
            fullWidth/>
    </Box>
  )
}

export default FieldItem