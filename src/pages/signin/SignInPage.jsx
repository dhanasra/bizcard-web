import { Box, Button, Divider, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo/logo.png'
import theme from '../../utils/theme'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import useStyles from './style';

function SignInPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={`${classes.window} ${isSmallScreen ? classes.windowMax : ''}`}>
        <Box className={classes.outerBox}>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "4px"}}>
                <img src={logo} width={30} height={30} alt="logo"/>
                <Typography variant="h5" sx={{marginLeft: "4px"}}>Bizcard</Typography>
            </div>
            <Typography variant="h6">Login to your account</Typography>
            <Box sx={{textAlign: "start", margin: "20px 0"}}>
                <Typography variant="label" >Email Address</Typography>
                <TextField size="small" fullWidth/>
            </Box>
            <Button  variant="contained" disableElevation fullWidth>Submit</Button>
            <Divider spacing={1} sx={{fontSize: "0.8em", my: 3}}>Or</Divider>
            <Button sx={{marginBottom: "20px"}} startIcon={<FcGoogle/>} variant="outlined" disableElevation fullWidth>Signin With Google</Button>
            <Button sx={{marginBottom: "8px"}} variant="outlined" startIcon={<BiLogoFacebookCircle color="#4267B2"/>} disableElevation fullWidth>Signin With Facebook</Button>
        </Box>
    </Box>
  )
}

export default SignInPage