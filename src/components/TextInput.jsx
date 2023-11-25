import { TextField, Typography } from '@mui/material'
import React from 'react'

function TextInput(props) {
  return (
    <div>
        <Typography variant='textFieldLabel' >{props.label}</Typography>
        <TextField
            variant="standard" 
            InputProps={{
                disableUnderline: true,
                style: {
                    fontSize: '15px'
                }
            }} 
            sx={{
                marginTop: "8px",
                background: "#F7F7F7", 
                padding: "12px 13px", 
                borderRadius: "10px",
                boxSizing: "border-box"
            }} 
            placeholder={props.hint??props.label}
            value={props.value}
            onChange={props.onChange}
            fullWidth
        />
    </div>
  )
}

export default TextInput