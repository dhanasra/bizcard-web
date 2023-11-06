import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo/logo.png'
import theme from '../../utils/theme'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import useStyles from './style';
import { useNavigate } from 'react-router-dom';

function SignInPage() {

    const navigate = useNavigate();

    const classes = useStyles();

  return (
    <Box className={`${classes.window} `}>
        <Box className={classes.outerBox}>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "4px"}}>
                <img src={logo} width={30} height={30} alt="logo"/>
                <Typography variant="h5" sx={{marginLeft: "4px"}}>Bizcard</Typography>
            </div>
            <Typography variant="h6">Login to your account</Typography>
            <Stack spacing={2} sx={{margin: "24px 0 32px 0"}}>
                <TextField label={"Email Address"} fullWidth/>
                <TextField label={"Password"} fullWidth/>
            </Stack>
            <Button  variant="contained" onClick={()=>navigate('/auth/callback')} disableElevation fullWidth>Submit</Button>
            <Divider spacing={1} sx={{fontSize: "0.8em", my: 3}}>Or</Divider>
            <Button sx={{marginBottom: "20px"}} startIcon={<FcGoogle/>} variant="outlined" disableElevation fullWidth>Signin With Google</Button>
            <Button sx={{marginBottom: "24px"}} variant="outlined" startIcon={<BiLogoFacebookCircle color="#4267B2"/>} disableElevation fullWidth>Signin With Facebook</Button>
            <Typography variant='body2'>Don't have an account?  
                <span onClick={()=>{}} style={{color: theme.palette.secondary.main, cursor: "pointer", margin: "0 4px"}}>Signup</span>
            </Typography>
        </Box>
    </Box>
  )
}

export default SignInPage