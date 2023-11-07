import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import RichTextEditor from '../../../../components/RichTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { updateCardData } from '../../../../features/cardBuilder/cardBuilderSlice';

function BusinessForm() {

    const dispatch = useDispatch();
    const cardData = useSelector((state) => state.cardBuilder.cardData);
  
    const handleChange=(field, event)=>{
      dispatch(updateCardData({path: field, value: event.target.value}));
    }  
    const handleEditorChange = (htmlString) => {
      dispatch(updateCardData({path: "company.companyDescription", value: htmlString}));
    };

  return (
    <div style={{width: "100%"}}>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Profile</Typography>
        </Box>
        <Grid container columnSpacing={4} rowSpacing={3.5}>
            <Grid item xs={6} >
                <TextField label={"Title"} value={cardData?.company?.title??""} onChange={(event)=>handleChange("company.title", event)} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Department"} value={cardData?.company?.department??""} onChange={(event)=>handleChange("company.department", event)} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Company Name"} value={cardData?.company?.companyName??""} onChange={(event)=>handleChange("company.companyName", event)} fullWidth/>
            </Grid>
            <Grid item xs={6} >
                <TextField label={"Company Website"} value={cardData?.company?.companyWebsite??""} onChange={(event)=>handleChange("company.companyWebsite", event)} fullWidth/>
            </Grid>
        </Grid>
        <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
              <Typography variant="subtitleBold" >Business Description</Typography>
        </Box>
        <RichTextEditor 
            value={cardData?.company?.companyDescription??""}
            onChange={handleEditorChange}    
        />
    </div>
  )
}

export default BusinessForm