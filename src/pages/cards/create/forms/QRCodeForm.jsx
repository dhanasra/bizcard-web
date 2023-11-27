import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardData } from '../../../../features/cardBuilder/cardBuilderSlice';
import ThemePicker from '../../../../components/ThemePicker'
import ImagePickerPlaceholder from '../../../../components/ImagePickerPlaceholder'
import { FaEdit } from 'react-icons/fa';
import SingleSelect from '../../../../components/SingleSelect';

function QRCodeForm() {

  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cardBuilder.cardData);

  const handleValueChange=(field, val)=>{
    dispatch(updateCardData({path: field, value: val}));
  }
  
  const handleImageChange=(image)=>{
    dispatch(updateCardData({path: "qr.logo", value: image}));
  }

  const removeImage=()=>{
    dispatch(updateCardData({path: "qr.logo", value: null}));
  }

  return (
    <div>
      <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Design</Typography>
      </Box>
      <div style={{width: "100%", display: "flex", alignItems: 'center'}}>
      <Box>
          <ImagePickerPlaceholder
              title={"Center Logo"}
              text={"Upload Logo"}
              instruction={"Ideal dimensions: 240px x 240px (1:1)"}
              picture={cardData?.qr?.logo}
              onChange={handleImageChange}
              onRemove={removeImage}
              icon={<FaEdit fontSize={"40px"} style={{color: "#aaa"}}/>}
          />
      </Box>

      <Grid container columnSpacing={6} rowSpacing={1} padding={'20px 50px'}>
            <Grid item xs={6} >
                <SingleSelect
                  label={'Qr Style'}
                  value={cardData?.qr?.codeStyle}
                  options={['Squares', 'Dots']}
                  onChange={(value)=>handleValueChange("qr.codeStyle", value.toLowerCase())}
                />
            </Grid>
            <Grid item xs={6} >
                <SingleSelect
                  label={'Eye Style'}
                  value={cardData?.qr?.eyeStyle}
                  options={['Square', 'Circle', 'Leaf']}
                  onChange={(value)=>handleValueChange("qr.eyeStyle", value.toLowerCase())}
                />
            </Grid>
      </Grid>
      </div>

      <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
          <Typography variant="subtitleBold" >Choose Color</Typography>
      </Box>

      <ThemePicker theme={cardData?.qr?.fgColor} onChange={(value)=>handleValueChange("qr.fgColor", value)}/>

      <Box sx={{marginBottom: "12px", marginTop: "32px"}}>
          <Typography variant="subtitleBold" >Eye Color</Typography>
      </Box>

      <ThemePicker theme={cardData?.qr?.eyeColor} onChange={(value)=>handleValueChange("qr.eyeColor", value)}/>
    </div>
  )
}

export default QRCodeForm