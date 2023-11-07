import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardData } from '../../../../features/cardBuilder/cardBuilderSlice';

function CardForm() {

    const dispatch = useDispatch();
    const cardData = useSelector((state) => state.cardBuilder.cardData);
  
    const handleChange=(event)=>{
      dispatch(updateCardData({path: "cardName", value: event.target.value}));
    }  

  return (
    <div style={{width: "100%"}}>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Card</Typography>
        </Box>
        <Grid container columnSpacing={8} rowSpacing={3.5}>
            <Grid item sm={12} md={6} >
                <TextField 
                    label={"Card Name"} 
                    value={cardData?.cardName??""} 
                    onChange={handleChange}
                    helperText={"This field does not appear on the card."}
                    fullWidth
                />
            </Grid>
        </Grid>
    </div>
  )
}

export default CardForm