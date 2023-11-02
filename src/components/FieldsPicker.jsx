import { Box, Chip, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { PiMagnifyingGlassLight } from 'react-icons/pi'

function FieldsPicker() {

    const fields = ['Website', 'link', 'Instagram', 'Email', 'Linkedin', 'Facebook'];

  return (

    <Box
        p={2}
        sx={{
            width: "40%",
            borderRadius: "8px",
            background: "#F7FAFC"
        }}
    >
        <TextField
            size="small"
            placeholder={"Search fields here..."}
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <PiMagnifyingGlassLight style={{marginRight: "4px"}} fontSize={"20px"}/>
                    </InputAdornment>
                ),
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#EEEf',
                        boxShadow: "0px 2px 30px #ccc6"
                    },
                }
            }}  
        />

        <Box sx={{margin: "16px 0 8px 2px"}}>
            <Typography variant='labelLight' >Most Popular</Typography>
        </Box>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            {
                fields.map((field)=>{
                    return <Chip label={field} sx={{background: "#fff", boxShadow: "0px 2px 30px #ccc6"}}/>
                })
            }
        </Stack>
    </Box>
  )
}

export default FieldsPicker