import { Box, Grid, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import Sider from '../../../components/Sider'
import useStyles from './style'
import { PiMagnifyingGlassLight } from "react-icons/pi";
import CardsEmpty from '../../../components/CardsEmpty'
import theme from '../../../utils/theme'
import ContactItem from '../../../components/ContactItem'
import ContactViewDrawer from '../view/ContactViewPage'
import { useSelector } from 'react-redux'

function ContactsListPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [viewContact, setViewContact] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const cards = useSelector((state)=>state.app.cards);

    const handleTap = (card)=>{
        setSelectedContact(card);
        setViewContact(true);
    }

  return (
    <Box className={classes.window}>
        <CommonAppBar />
        <ContactViewDrawer cardData={selectedContact} open={viewContact} onClose={()=>setViewContact(false)}/>
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                {
                    cards.length===0
                    ? <CardsEmpty/>
                    : <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                        
                        <Box className={classes.toolbar} p={isSmallScreen ? 2: 3}>
                            <Typography variant='h6'>My Contacts</Typography>
                            {!isSmallScreen && <TextField 
                                size="small"
                                className={classes.searchField}
                                placeholder={"Search contacts here..."}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PiMagnifyingGlassLight style={{marginRight: "4px"}} fontSize={"20px"}/>
                                        </InputAdornment>
                                    ),
                                }}  
                            />}
                        </Box>
                        <Box className={classes.cardsWrapper}>
                            {
                                cards.map((card)=>(
                                    <Grid key={card._id} container p={isSmallScreen ? 2: 3} spacing={2} >
                                        <Grid item xl={1.5} lg={2}  md={3} sm={4}  xs={6}>
                                            <ContactItem cardData={card} onTap={()=>handleTap(card)}/>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    </Box>
  )
}

export default ContactsListPage