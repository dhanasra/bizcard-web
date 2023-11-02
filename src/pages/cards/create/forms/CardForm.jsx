import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function CardForm() {
  return (
    <div style={{width: "100%"}}>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Card</Typography>
        </Box>
        <Grid container columnSpacing={8} rowSpacing={3.5}>
            <Grid item sm={12} md={6} >
                <TextField 
                    label={"Card Name"} 
                    helperText={"This field does not appear on the card."}
                    fullWidth
                />
            </Grid>
        </Grid>
    </div>
  )
}

export default CardForm