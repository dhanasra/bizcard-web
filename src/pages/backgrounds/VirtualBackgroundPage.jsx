import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CommonAppBar from '../../components/CommonAppBar'
import Sider from '../../components/Sider'
import useStyles from './style';
import theme from '../../utils/theme';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import CardsDropdown from '../../components/CardsDropdown';
import { useSelector } from 'react-redux';
import { COMMON_BG } from '../../utils/global';

function VirtualBackgroundPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const cards = useSelector((state)=>state.app.cards);

  return (
    <Box className={classes.window}>
        <CommonAppBar />
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                    
                    <Box className={classes.toolbar} p={isSmallScreen ? 2: 3}>
                        <Typography variant='h6'>Virtual Backgrounds</Typography>
                        <CardsDropdown cards={cards} onChange={(card)=>{}}/>
                    </Box>

                    <Box sx={{height: "calc(100% - 104px)", width: "100%", display: "flex"}}>
                        <Box sx={{flexGrow: 1, p: 2, display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Box sx={{flexGrow: 1, display: "flex", alignItems: "center"}}>
                                <Box
                                    component={"img"}
                                    sx={{
                                        boxSizing: "border-box",
                                        width: "520px",
                                        height: "380px",
                                        backgroundPosition: "cover"
                                    }}
                                    src={COMMON_BG}
                                />
                            </Box>
                            
                            <Box>
                                <Button variant="contained" sx={{width: "200px"}}>Download</Button>
                            </Box>

                        </Box>
                        <Box sx={{width: "600px", p: 2, display: "flex", flexDirection: "column"}}>
                            <Box >
                                <Stack direction={"row"} spacing={2}>
                                    <TextField 
                                        size="small"
                                        className={classes.searchField}
                                        placeholder={"Search backgrounds here..."}
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PiMagnifyingGlassLight style={{marginRight: "4px"}} fontSize={"20px"}/>
                                                </InputAdornment>
                                            ),
                                        }}  
                                    />
                                    <Button variant="contained" sx={{width: "200px"}}>Upload own image</Button>
                                </Stack>
                            </Box>

                            <Box sx={{flexGrow: 1, overflow: "auto", marginTop: "24px"}}>

                                <Grid container spacing={2}>
                                    {[1, 2, 3, 4, 5].map((background)=>{
                                        return <Grid item key={background} md={4}>
                                            <Box
                                                component={"img"}
                                                sx={{
                                                    boxSizing: "border-box",
                                                    width: "100%",
                                                    height: "140px"
                                                }}
                                                src={COMMON_BG}
                                            />
                                        </Grid>
                                    })}
                                </Grid>

                            </Box>

                        </Box>
                            

                    </Box>

                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default VirtualBackgroundPage