import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import { FiFacebook, FiGlobe, FiInstagram, FiMail, FiMapPin, FiPhone, FiYoutube } from 'react-icons/fi';

const useStyle = makeStyles({
    outerBox: {
        height: "100%",
        width: "auto",
        background: "#333",
        margin: "16px 16px 0 0px", 
        boxShadow: "0px 2px 30px #ccc6",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    notch: {
        background: "#666",
        height: "12px",
        width: "60px",
        borderRadius: "16px"
    },
    screen: {
        margin: "10px",
        background: "#fff",
        borderRadius: "4px",
        width: "100%",
        height: "100%",
        overflow: "auto"
    },
    content: {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        background: "#fff", 
        margin: "16px", 
        borderRadius: "4px",
        boxShadow: "0px 2px 30px #ccc6"
    },
})

function PhonePreview() {

    const classes = useStyle();

  return (
    <Box p={1} className={classes.outerBox}>
        <Box m={1} className={classes.notch}/>
        <Box className={classes.screen}>
            <Box className={classes.content}>
                <Box
                    sx={{
                        width: "100%",
                        height: "50px",
                        background: "#556080",
                        borderRadius: "16px 16px 0 0"
                    }}
                />

                <Box sx={{width: "auto", height: "70px"}}>
                    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"#556080"}}></path>
                    </svg>
                </Box>
                
                <Box px={2} py={3}>

                    <Typography>MR. R. Dhana Sekaran</Typography>
                    <Typography variant="caption">Flutter Dev</Typography>

                    <Stack direction="row" style={{marginTop: "16px"}}>
                        <FiPhone fontSize={"16px"} style={{marginRight: "8px"}}/>
                        <Typography variant="content">+91 8056384773</Typography>
                    </Stack>

                    <Stack direction="row" style={{marginTop: "16px"}}>
                        <FiMail fontSize={"16px"} style={{marginRight: "8px"}}/>
                        <Typography variant="content">1dhana625@gmail.com</Typography>
                    </Stack>

                    <Stack direction="row" style={{marginTop: "16px"}}>
                        <FiMapPin fontSize={"16px"} style={{marginRight: "8px"}}/>
                        <Typography variant="content">11, South vaikolkara street, Trichy - 620002</Typography>
                    </Stack>

                    <Divider sx={{my: 3}}/>

                    <Typography>Spiderlingz</Typography>
                    <Typography variant="caption">Information Technology</Typography>

                    <Stack direction="row" style={{marginTop: "16px"}}>
                        <FiGlobe fontSize={"16px"} style={{marginRight: "8px"}}/>
                        <Typography variant="content">https://spiderlingz.com</Typography>
                    </Stack>

                    <Stack direction="row" style={{marginTop: "16px", marginBottom: "6px"}}>
                        <Typography variant="content">About Us</Typography>
                    </Stack>
                    <Typography variant="caption">Spiderlingz group is enthusiastic about conveying greatness and focused on assisting customers with scaling higher than ever. Focused on trustworthiness and determination. We exhibit a solid obligation to economical and mindful strategic policies. Our upsides of advancement and coordinated effort drive us to make enduring progress for our customers across the globe.</Typography>



                    <Divider sx={{my: 3}}>
                        <Typography variant="caption" sx={{textAlign: "center", flexGrow: 1}}>Follow Me On</Typography>
                    </Divider>

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={2}>
                        <Avatar><FiYoutube /></Avatar>
                        <Avatar><FiInstagram /></Avatar>
                        <Avatar><FiFacebook /></Avatar>

                    </Stack>

                </Box>
                


            </Box>

        </Box>
    </Box>
  )
}

export default PhonePreview