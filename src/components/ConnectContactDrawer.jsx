import { Avatar, Box, Button, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { PiHandshakeLight } from 'react-icons/pi'
import theme from '../utils/theme';
import { HiCheckBadge, HiUser } from 'react-icons/hi2';
import WindowLoader from './WindowLoader';
import { createContact } from '../network/service/contactService';
import { useNavigate } from 'react-router-dom';
import { updateAnalytics } from '../network/service/analyticsService';

function ConnectContactDrawer(props) {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;

    const cards = window.cards;

    const [selected, setSelected] = useState(cards?.length>0 ? cards[0] : null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const connectContact =async()=>{
        setLoading(true);
        const dataToSend = {
            cardId: props.cardData._id,
            friendId: props.cardData.createdBy,
            myCardId: selected?._id
        };
        
        await Promise.all([
            createContact(dataToSend),
            updateAnalytics(props.cardData._id, "connect")
        ])
        
        setLoading(false);
        navigate('/app/contacts');
    }

  return (
    <div>
        {loading && <WindowLoader />}
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
                    <PiHandshakeLight fontSize={'24px'} style={{marginRight: "16px"}}/>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Connect Contact</Typography>
                </div>
                <IconButton onClick={()=>props.onClose()}>
                    <FiX fontSize={"22px"} />
                </IconButton>
            </Toolbar>

            <Stack p={3} spacing={2}>

                <Typography>Give My {selected?.cardName} card to Dhana Sekaran</Typography>

                <Box sx={{marginBottom: "8px"}}>
                    <Typography variant="labelLight">Change card type</Typography>
                </Box>

                {
                    cards?.map((card)=>{

                        return <ListItem onClick={()=>setSelected(card)} key={card._id} sx={{border: `2px solid ${selected._id===card._id ? '#443': '#fff' }`, cursor: "pointer",boxShadow: "0px 2px 30px #ccc6", borderRadius: "3px", px: "12px", py: "10px", alignItems: "flex-center"}}>
                            <ListItemIcon sx={{minWidth: "32px", marginRight: "12px"}}>
                                <Avatar sx={{width: 32, height: 32}} ><HiUser /> </Avatar>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="content" >{card.cardName}</Typography>
                            </ListItemText>
                            {selected._id===card._id && <HiCheckBadge fontSize={"24px"}/>}
                        </ListItem>
                    })
                }

                <Button  variant="contained" onClick={connectContact} sx={{marginTop: "32px"}} disableElevation fullWidth>Connect</Button>


            </Stack>


        </Drawer>
    </div>
  )
}

export default ConnectContactDrawer