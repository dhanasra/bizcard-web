import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logoWhite from '../assets/logo/logo-white.png';
import { PiNoteLight, PiGearLight, PiEnvelopeLight, PiUsersLight, PiImageSquareLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
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
        path: "/settings"
    }
];

function NavDrawer(props) {
    
    const location = window.location.pathname;


  return (
    <div>
        <Drawer
            open={props.open} 
            anchor="left"
            sx={{
                padding: "20px",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    width: '60%'
                },
            }}
            
        >
        <Toolbar sx={{px: 1, backgroundColor: theme.palette.primary.main, justifyContent: "space-between"}} variant='dense'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={logoWhite} alt='Logo' width={20} style={{marginRight: '8px'}}/>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px', color: '#fff' }}>Bizcard</Typography>
            </div>
            <IconButton onClick={()=>props.onClose()}>
                <FiX color='#fff' fontSize={"22px"} />
            </IconButton>
        </Toolbar>
        <Divider/>
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
                                    <ListItemIcon>
                                        {item.icon} 
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Drawer>
    </div>
  )
}

export default NavDrawer