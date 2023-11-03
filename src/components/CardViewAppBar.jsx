import { AppBar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ArrowBack } from '@mui/icons-material';
import { PiChartLineLight, PiDotsThreeVerticalLight, PiGearLight, PiShareFatLight } from 'react-icons/pi';

function CardViewAppBar() {

    const options = [
        'Copy',
        'Download QR Code',
        'Download Pdf',
        'Delete'
    ];
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <AppBar
        position="fixed">
        <Toolbar
            variant="dense"
            sx={{justifyContent: "space-between", padding: "0px"}}
        >
            <Stack  direction={"row"} spacing={1} alignItems={"center"}>
                    <IconButton sx={{color: '#fff'}}><ArrowBack/></IconButton>
                    <Typography variant='h6'>Work</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <IconButton sx={{color: '#fff'}}><PiShareFatLight /></IconButton>
                    <IconButton sx={{color: '#fff'}}><PiChartLineLight /></IconButton>
                    <IconButton sx={{color: '#fff'}}><PiGearLight /></IconButton>
                    <IconButton sx={{color: '#fff'}} onClick={handleClick}><PiDotsThreeVerticalLight /></IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                        'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default CardViewAppBar