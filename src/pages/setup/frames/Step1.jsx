import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../features/setup/setupSlice';

function Step1() {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.setup.formData);

  const handleChange=(field, event)=>{
    dispatch(setFormData({[field]: event.target.value}));
  }

  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Hi, Tell us about you</Typography>
        <Stack spacing={2} sx={{margin: "24px 0 32px 0"}}>
            <Stack spacing={2} direction={"row"}>
                <TextField label={"First Name"} value={formData?.firstName??""} onChange={(event)=>handleChange("firstName", event)} fullWidth/>
                <TextField label={"Last Name"} value={formData?.lastName??""} onChange={(event)=>handleChange("lastName", event)} fullWidth/>
            </Stack>
            <TextField label={"Email Address"} value={formData?.email??""} onChange={(event)=>handleChange("email", event)} fullWidth/>
        </Stack>
    </Box>
  )
}

export default Step1 