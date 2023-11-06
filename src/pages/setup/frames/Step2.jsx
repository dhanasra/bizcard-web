import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../features/setup/setupSlice';

function Step2() {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.setup.formData);

  const handleChange=(field, event)=>{
    dispatch(setFormData({[field]: event.target.value}));
  }

  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Add your title and company</Typography>
        <Stack spacing={2} sx={{margin: "24px 0 32px 0"}}>
            <TextField label={"Title"} value={formData?.title??""} onChange={(event)=>handleChange("title", event)} fullWidth/>
            <TextField label={"Company"} value={formData?.companyName??""} onChange={(event)=>handleChange("companyName", event)} fullWidth/>
        </Stack>
    </Box>
  )
}

export default Step2