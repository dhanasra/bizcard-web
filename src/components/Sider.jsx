import React from 'react'
import { Box, Drawer, List, ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { PiNoteLight, PiGearLight, PiEnvelopeLight, PiUsersLight, PiImageSquareLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import theme from '../utils/theme';

const items = [
    {
        icon: <PiNoteLight fontSize={'24px'}/>,
        label: "Cards",
        path: "/app/cards"
    },
    {
        icon: <PiUsersLight fontSize={'24px'}/>,
        label: "Contacts",
        path: "/contacts"
    },
    {
        icon: <PiImageSquareLight fontSize={'24px'}/>,
        label: "Theme",
        path: "/backgrounds"
    },
    {
        icon: <PiEnvelopeLight fontSize={'24px'}/>,
        label: "Signatures",
        path: "/email-signatures"
    },
    {
        icon: <PiGearLight fontSize={'24px'}/>,
        label: "Settings",
        path: "/app/settings"
    }
];
function Sider() {

  const location = window.location.pathname;

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{display: isSmallScreen ? 'none': ''}}>
        <Drawer
        variant='permanent'
            sx={{
                height: "100%",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    position: 'relative'
                },
            }}
            
        >
            <List>
                {
                    items.map((item)=>{
                        return (
                            <ListItemButton 
                                key={item.path}
                                component={Link} 
                                to={item.path}
                                sx={{
                                    justifyContent: 'center', 
                                    margin: '16px 0',
                                    color: "#1116",
                                    "&.Mui-selected": {
                                        backgroundColor: "#fff",
                                        color: "#1c222d"
                                    }
                                }} 
                                selected={location === item.path}>
                                    <Box sx={{flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                                        {item.icon} 
                                        <Typography sx={{fontSize: '14px', marginTop: '8px'}}>{item.label}</Typography>
                                    </Box>
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Drawer>
    </Box>
  )
}

export default Sider