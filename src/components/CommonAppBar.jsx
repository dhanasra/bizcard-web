import { AppBar, Avatar, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import logoWhite from '../assets/logo/logo-white.png'
import { RxHamburgerMenu } from "react-icons/rx";
import NavDrawer from './NavDrawer';
import theme from '../utils/theme';

function CommonAppBar() {

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const openSideNav=()=>{
      setOpen(true);
    }
  const closeSideNav=()=>{
      setOpen(false);
  }

  return (
    <AppBar
        position="fixed">
        <NavDrawer open={open} onClose={()=>closeSideNav()}/>
        <Toolbar
            variant="dense"
            sx={{justifyContent: "space-between"}}
        >
                {
                  isSmallScreen
                  ? <IconButton onClick={()=>openSideNav()} sx={{color: '#fff'}}><RxHamburgerMenu /></IconButton>
                  : <div style={{display: 'flex', alignItems: 'center'}}>
                      <img src={logoWhite} alt='Logo' width={24} style={{marginRight: '8px'}}/>
                      <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Bizcard</Typography>
                  </div>
                }
                <div  style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar alt="Dhana Sekaran" src="/static/images/avatar/1.jpg" sx={{width: 36, height: 36}} />
                </div>
        </Toolbar>
    </AppBar>
  )
}

export default CommonAppBar