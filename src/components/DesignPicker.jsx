import { Avatar, Box, Grid } from '@mui/material'
import React from 'react'

function DesignPicker() {
  return (
    <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box sx={{
                    width: "140px",
                    height: "140px",
                    background: "#fff",
                    boxShadow: "0px 2px 30px #ccc6",
                    borderRadius: "16px"
                }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "30%",
                            background: "#556080",
                            borderRadius: "16px 16px 0 0"
                        }}
                    />
                    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"#556080"}}></path>
                    </svg>

                </Box>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{
                        width: "140px",
                        height: "140px",
                        background: "#fff",
                        boxShadow: "0px 2px 30px #ccc6",
                        borderRadius: "16px",
                        position: "relative"
                    }}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "30%",
                                background: "#556080",
                                borderRadius: "16px 16px 0 0"
                            }}
                        />

                        <Avatar sx={{
                            background: "#E7ECED", 
                            position: "absolute", 
                            width: 46,
                            height: 46,
                            right: 16, 
                            top: 30
                        }}/>

                        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                            <path d="M0,180 C150,100 350,0 600,00 L500,00 L0,0 Z" style={{stroke: "none", fill:"#556080"}}></path>
                        </svg>  

                    </Box>
                </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box sx={{
                    width: "140px",
                    height: "140px",
                    background: "#fff",
                    boxShadow: "0px 2px 30px #ccc6",
                    borderRadius: "16px",
                    position: "relative"
                }}>
                    <Avatar sx={{
                            background: "#E7ECED", 
                            position: "absolute", 
                            width: 46,
                            height: 46,
                            top: "44%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}/>
                    <Box
                        sx={{
                            width: "100%",
                            height: "24%",
                            background: "#556080",
                            borderRadius: "16px 16px 0 0"
                        }}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            height: "20%",
                            background: "#556080",
                            borderRadius: "0 0 100px 100px"
                        }}
                    />
                </Box>
            </Box>
        </Grid>  
        <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box sx={{
                    width: "140px",
                    height: "140px",
                    background: "#fff",
                    boxShadow: "0px 2px 30px #ccc6",
                    borderRadius: "16px",
                    position: "relative"
                }}>

                        <Avatar sx={{
                            background: "#E7ECED", 
                            position: "absolute", 
                            width: 46,
                            height: 46,
                            left: 16,
                            top: 40
                        }}/>
                    <Box
                        sx={{
                            width: "100%",
                            height: "40%",
                            background: "#556080",
                            borderRadius: "16px 16px 0 0"
                        }}
                    />

                </Box>
            </Box>
        </Grid>                
    </Grid>
  )
}

export default DesignPicker