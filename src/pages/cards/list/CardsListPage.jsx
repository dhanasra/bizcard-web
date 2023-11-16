import { Box, Button, Grid, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import Sider from '../../../components/Sider'
import useStyles from './style'
import { PiMagnifyingGlassLight } from "react-icons/pi";
import CardsEmpty from '../../../components/CardsEmpty'
import CardItem from '../../../components/CardItem'
import theme from '../../../utils/theme'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CardsListPage() {

    const classes = useStyles();

    const navigate = useNavigate();

    const cards = useSelector((state)=>state.app.cards)??[];

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.window}>
        <CommonAppBar />
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                {
                    cards?.length===0
                    ? <CardsEmpty/>
                    : <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                        
                        <Box className={classes.toolbar} p={isSmallScreen ? 2: 3}>
                            <Typography variant='h6'>My Cards</Typography>
                            <div>
                                {!isSmallScreen && <TextField 
                                    size="small"
                                    className={classes.searchField}
                                    placeholder={"Search card here..."}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PiMagnifyingGlassLight style={{marginRight: "4px"}} fontSize={"20px"}/>
                                            </InputAdornment>
                                        ),
                                    }}  
                                />}
                                <Button onClick={()=>navigate("/app/cards/create")} variant="contained" sx={{marginLeft: "16px"}}>Add Card</Button>
                            </div>

                        </Box>
                        <Box className={classes.cardsWrapper}>
                            <Grid container p={isSmallScreen ? 2: 3} spacing={2} >
                                {
                                    cards?.map((card)=>(
                                        <Grid key={card._id} item xl={3} lg={4}  md={6}  xs={12}>
                                            <CardItem card={card}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    </Box>
  )
}

export default CardsListPage