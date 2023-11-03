import React, { useState } from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import { Box, IconButton, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import Sider from '../../../components/Sider'
import useStyles from './style';
import theme from '../../../utils/theme';
import { ArrowBack } from '@mui/icons-material';
import { PiCopyLight, PiFilePdfLight, PiQrCodeLight, PiTrashLight } from 'react-icons/pi';
import ShareTabPanel from './panels/ShareTabPanel';
import AnalyticsTabPanel from './panels/AnalyticsTabPanel';
import SettingsTabPanel from './panels/SettingsTabPanel';
import CardViewAppBar from '../../../components/CardViewAppBar';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CardViewPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box className={classes.window}>
        { isSmallScreen ? <CardViewAppBar/> : <CommonAppBar /> }
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                    <Box
                        sx={{
                            width: "420px",
                            background: "#fff",
                            boxShadow: "0px 2px 30px #ccc6",
                            borderRadius: "8px",
                            mx: isSmallScreen? 2 : 4,
                            my: isSmallScreen? 2 : 2,
                            minHeight: "400px"
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "50px",
                                background: "#556080",
                                borderRadius: "8px 8px 0 0"
                            }}
                        />

                        <Box sx={{width: "auto", height: "70px"}}>
                            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                                <path d="M0,180 C150,100 350,0 600,00 L500,00 L0,0 Z" style={{stroke: "none", fill:"#556080"}}></path>
                            </svg>  
                        </Box>
                    </Box>

                    {
                        !isSmallScreen && <Box
                            sx={{
                                flexGrow: 1,
                                background: "#fff",
                                borderLeft: "1px solid  #0000001F"
                            }}
                        >   
                            <Box className={classes.toolbar}>
                                <Stack  direction={"row"} spacing={1} alignItems={"center"}>
                                    <IconButton><ArrowBack/></IconButton>
                                    <Typography variant='h6'>Work</Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                    <IconButton><PiCopyLight /></IconButton>
                                    <IconButton><PiQrCodeLight /></IconButton>
                                    <IconButton><PiFilePdfLight /></IconButton>
                                    <IconButton><PiTrashLight /></IconButton>
                                </Stack>
                            </Box>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                <Box sx={{width: isSmallScreen ? "100%": "500px"}}>
                                    <Tabs
                                        variant={isSmallScreen ? "scrollable": "fullWidth"}
                                        allowScrollButtonsMobile
                                        value={value} onChange={handleChange} >
                                        <Tab label="Share Card" {...a11yProps(0)} sx={{textTransform: "none"}} />
                                        <Tab label="Analytics" {...a11yProps(1)} sx={{textTransform: "none"}} />
                                        <Tab label="Settings" {...a11yProps(2)} sx={{textTransform: "none"}} />
                                    </Tabs>
                                </Box>
                            </Box>
                            
                            {
                                value===0 ? <ShareTabPanel/> :
                                value===1 ? <AnalyticsTabPanel/> : <SettingsTabPanel/>
                            }

                        </Box>
                    }
                </Box>
            
            </Box>
        </Box>
    </Box>
  )
}

export default CardViewPage