import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../features/setup/setupSlice';

function Step4() {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.setup.formData);

  const handleChange=(field, event)=>{
    dispatch(setFormData({[field]: event.target.value}));
  }

  return (
    <Box sx={{minHeight: "300px", py: 2, px: 1}}>
        <Typography variant="subtitle" color="bgGrey">Enter your phone number</Typography>
        <Box sx={{textAlign: "start", margin: "20px 0"}}>
            <TextField label={"Phone Number"} value={formData?.phone??""} onChange={(event)=>handleChange("phone", event)} fullWidth/>
        </Box>
    </Box>
  )
}

export default Step4