import { Avatar, Box, Button, CircularProgress, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { PiHandshakeLight } from 'react-icons/pi'
import theme from '../utils/theme';
import { HiCheckBadge, HiUser } from 'react-icons/hi2';
import { createContact } from '../network/service/contactService';
import { updateAnalytics } from '../network/service/analyticsService';

function ConnectContactDrawer(props) {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;

    const cards = window.cards;

    const [selected, setSelected] = useState(cards?.length>0 ? cards[0] : null);

    const [buttonLoading, setButtonLoading] = useState(false);

    const connectContact =async()=>{
        setButtonLoading(true);
        const dataToSend = {
            cardId: props.cardData._id,
            friendId: props.cardData.createdBy,
            myCardId: selected?._id
        };
        
        await Promise.all([
            createContact(dataToSend),
            updateAnalytics(props.cardData._id, "connect")
        ])
        
        setButtonLoading(false);
        props.onConnected();
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
                    <PiHandshakeLight fontSize={'24px'} style={{marginRight: "16px"}}/>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Connect Contact</Typography>
                </div>
                <IconButton onClick={()=>props.onClose()}>
                    <FiX fontSize={"22px"} />
                </IconButton>
            </Toolbar>

            <Stack p={3}>

                <Typography>Give My {selected?.cardName} card to Dhana Sekaran</Typography>

                <Typography>Share With Dhana Sekaran</Typography>

                <Box sx={{marginBottom: "8px", marginTop: "16px"}}>
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

                <Button  variant="contained" onClick={connectContact} sx={{marginTop: "45px", position: 'relative', height: 40 }}  disableElevation fullWidth>
                {
                    buttonLoading 
                    ? <CircularProgress
                    size={24}
                    style={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px', 
                        marginLeft: '-12px',
                    }}/> 
                    : 'Connect'
                    
                }
                </Button>


            </Stack>


        </Drawer>
    </div>
  )
}

export default ConnectContactDrawer