import { Box, Button, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../utils/theme';
import { FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function SignInDrawer(props) {
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;
    const currentLocation = useLocation();

    const navigate = useNavigate();

    const handleNavigate=(path)=>{
        Cookies.set('auth-redirect', currentLocation.pathname)
        navigate(path);
    }

  return (
    <div>
        <Drawer
            open={props.open} 
            anchor="right"
            sx={{
                padding: "20px",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    maxWidth: "460px",
                    width: isSmallScreen ? '100%': width
                },
            }}
        >
            <Toolbar sx={{px: 1, justifyContent: "space-between", boxShadow: 1}} variant='dense' >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Login</Typography>
                </div>
                <IconButton onClick={()=>props.onClose()}>
                    <FiX fontSize={"22px"} />
                </IconButton>
            </Toolbar>

            <Box p={3}>
                <Typography variant='titleBold'>Unlock a world of possibilities!</Typography>
                <div style={{height: "16px"}}/>
                <Typography variant='content'>Sign in to seamlessly connect with your contacts. If you're new here, join us and experience the benefits – sign up now for free! </Typography>
                <Stack direction={"row"} spacing={2} sx={{marginTop: "32px"}}>
                    <Button onClick={()=>handleNavigate('/signin')} variant="contained" fullWidth>Login</Button>
                    <Button onClick={()=>handleNavigate('/signup')} variant="contained" fullWidth>Signup</Button>
                </Stack>
            </Box>
        </Drawer>
    </div>
  )
}

export default SignInDrawer