import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import theme from '../../utils/theme'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import useStyles from './style';
import { useNavigate } from 'react-router-dom';
import WindowLoader from '../../components/WindowLoader';
import { signUpWithEmail } from '../../network/service/authService';

function SignUpPage() {

    const navigate = useNavigate();

    const classes = useStyles();

    const [loading, setLoading] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleFirstNameChange =(event)=>setFirstName(event.target.value)
    const handleLastNameChange =(event)=>setLastName(event.target.value)
    const handleEmailChange =(event)=>setEmail(event.target.value)
    const handlePasswordChange =(event)=>setPassword(event.target.value)

    async function signup(){
        setLoading(true);
        await signUpWithEmail({email: email, password: password});
        setLoading(false);
        navigate('/setup');
    }


  return (
    <Box className={`${classes.window} `}>
        {loading && <WindowLoader/>}
        <Box className={classes.outerBox}>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "4px"}}>
                <img src={logo} width={30} height={30} alt="logo"/>
                <Typography variant="h5" sx={{marginLeft: "4px"}}>Bizcard</Typography>
            </div>
            <Typography variant="h6">Create your account</Typography>

            <Stack spacing={2} sx={{margin: "24px 0 32px 0"}}>
                <Stack spacing={2} direction={"row"}>
                    <TextField label={"First Name"} onChange={handleFirstNameChange} value={firstName} fullWidth/>
                    <TextField label={"Last Name"} onChange={handleLastNameChange} value={lastName} fullWidth/>
                </Stack>
                <TextField label={"Email Address"} onChange={handleEmailChange} value={email} fullWidth/>
                <TextField label={"Password"} onChange={handlePasswordChange} value={password} fullWidth/>
            </Stack>
            <Button  variant="contained" onClick={()=>signup()} disableElevation fullWidth>Submit</Button>
            <Divider spacing={1} sx={{fontSize: "0.8em", my: 3}}>Or</Divider>
            <Button sx={{marginBottom: "20px"}} startIcon={<FcGoogle/>} variant="outlined" disableElevation fullWidth>Signin With Google</Button>
            <Button sx={{marginBottom: "24px"}} variant="outlined" startIcon={<BiLogoFacebookCircle color="#4267B2"/>} disableElevation fullWidth>Signin With Facebook</Button>
            <Typography variant='body2'>Already have an account?  
                <span onClick={()=>navigate("/signin")} style={{color: theme.palette.secondary.main, cursor: "pointer", margin: "0 4px"}}>Login</span>
            </Typography>
        </Box>
    </Box>
  )
}

export default SignUpPage