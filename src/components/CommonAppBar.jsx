import { AppBar, Avatar, IconButton, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import logoWhite from '../assets/logo/logo-white.png'
import { RxHamburgerMenu } from "react-icons/rx";
import NavDrawer from './NavDrawer';
import theme from '../utils/theme';
import { useSelector } from 'react-redux';
import AccountMenu from './AccountMenu';

function CommonAppBar() {

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const user = useSelector((state)=>state.app.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
                <Stack sx={{cursor: "pointer"}} onClick={handleMenuOpen} direction={"row"} spacing={1} display={"flex"} alignItems={"center"}>
                    <Typography color={"white"}>{user?.firstName} {user?.lastName}</Typography>
                    <Avatar alt="Dhana Sekaran" src="/static/images/avatar/1.jpg" sx={{width: 36, height: 36}} />
                </Stack>
                <AccountMenu open={menuOpen} onClose={handleMenuClose}/>
        </Toolbar>
    </AppBar>
  )
}

export default CommonAppBar