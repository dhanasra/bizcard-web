import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ColorPicker from '../../../../components/ColorPicker';
import DesignPicker from '../../../../components/DesignPicker';
import { Add } from '@mui/icons-material';

function DisplayForm() {

  return (
    <div>

        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Design</Typography>
        </Box>

        <DesignPicker/>

        <Box sx={{marginBottom: "12px", marginTop: "24px"}}>
            <Typography variant="subtitleBold" >Badges</Typography>
        </Box>

        <Grid container spacing={4}>
            <Grid item md={3} xs={4} sx={{justifyContent: "center", display: "flex"}}>
                
                <Box
                    sx={{   
                        cursor: "pointer",
                        width: "140px",
                        height: "140px",
                        border: "2px dashed #E2E8F0",
                        borderRadius: "8px",
                        background: "#F7FAFC",
                        padding: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Add/>
                    <Typography>Upload</Typography>
                </Box>
            </Grid>
        </Grid>

        <Box sx={{marginBottom: "12px", marginTop: "44px"}}>
            <Typography variant="subtitleBold" >Theme</Typography>
        </Box>

        <ColorPicker/>

    </div>
  )
}

export default DisplayForm