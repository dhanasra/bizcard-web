import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import userAvatar from '../../../../assets/placeholder/user.png'
import banner from '../../../../assets/placeholder/banner.png'
import image from '../../../../assets/placeholder/image.png'
import ColorPicker from '../../../../components/ColorPicker';
import DesignPicker from '../../../../components/DesignPicker';
import { Add } from '@mui/icons-material';

function DisplayForm() {

  return (
    <div>
        <Box sx={{marginBottom: "12px"}}>
            <Typography variant="subtitleBold" >Display</Typography>
        </Box>

        <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={image} width={120} alt={''} />

                    <Button variant="contained" component="label" sx={{marginTop: "16px", width: "150px"}}>
                        Upload Logo
                        <input type="file" hidden />
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={6} md={3}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={userAvatar} width={120} alt={''} />

                    <Button variant="contained" component="label" sx={{marginTop: "16px", width: "150px"}}>
                        Upload Photo
                        <input type="file" hidden />
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={6} md={3}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={banner} width={120} alt={''} />

                    <Button variant="contained" component="label" sx={{marginTop: "16px", width: "150px"}}>
                        Upload Banner
                        <input type="file" hidden />
                    </Button>
                </Box>
            </Grid>
        </Grid>

        <Box sx={{marginBottom: "12px", marginTop: "44px"}}>
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
                        width: "120px",
                        height: "120px",
                        borderRadius: "8px",
                        border: "1px dashed #556080",
                        display: "flex",
                        background: "#E7ECED",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
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