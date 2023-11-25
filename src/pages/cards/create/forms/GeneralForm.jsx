import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardData } from '../../../../features/cardBuilder/cardBuilderSlice';
import ImagePickerPlaceholder from '../../../../components/ImagePickerPlaceholder';

function GeneralForm() {

    const dispatch = useDispatch();
    const cardData = useSelector((state) => state.cardBuilder.cardData);
  
    const handleChange=(field, event)=>{
      dispatch(updateCardData({path: field, value: event.target.value}));
    }
    
    const handleImageChange=(image)=>{
      dispatch(updateCardData({path: "picture", value: image}));
    }

    const removeImage=()=>{
      dispatch(updateCardData({path: "picture", value: null}));
    }

  return (
    <div>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Profile</Typography>
        </Box>
        <Grid container columnSpacing={4} rowSpacing={3.5}>
            <Grid item xs={12}>
                <Box>
                    <ImagePickerPlaceholder
                        picture={cardData?.picture}
                        onChange={handleImageChange}
                        onRemove={removeImage}
                    />
                </Box>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField label={"First Name"} value={cardData?.name?.firstName??""} onChange={(event)=>handleChange("name.firstName", event)} fullWidth/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField label={"Last Name"} value={cardData?.name?.lastName??""} onChange={(event)=>handleChange("name.lastName", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Middle Name"} value={cardData?.name?.middleName??""} onChange={(event)=>handleChange("name.middleName", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Prefix"} value={cardData?.name?.prefix??""} onChange={(event)=>handleChange("name.prefix", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Phone Number"} value={cardData?.phoneNumber??""} onChange={(event)=>handleChange("phoneNumber", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Email Address"} value={cardData?.email??""} onChange={(event)=>handleChange("email", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} >
                <TextField label={"Bio"} value={cardData?.bio??""} onChange={(event)=>handleChange("bio", event)} fullWidth multiline rows={2}/>
            </Grid>
        </Grid>

        <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
            <Typography variant="subtitleBold" >Location</Typography>
        </Box>
        <Grid container columnSpacing={4} rowSpacing={3.5}>
            <Grid item xs={12} >
                <TextField label={"Address Line 1"} value={cardData?.address?.addressLine1??""} onChange={(event)=>handleChange("address.addressLine1", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} >
                <TextField label={"Address Line 2"} value={cardData?.address?.addressLine2??""} onChange={(event)=>handleChange("address.addressLine2", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"city"} value={cardData?.address?.city??""} onChange={(event)=>handleChange("address.city", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"State"} value={cardData?.address?.state??""} onChange={(event)=>handleChange("address.state", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Country"} value={cardData?.address?.country??""} onChange={(event)=>handleChange("address.country", event)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label={"Pincode"} value={cardData?.address?.pinCode??""} onChange={(event)=>handleChange("address.pinCode", event)} fullWidth/>
            </Grid>
        </Grid>
    </div>
  )
}

export default GeneralForm