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
import { useLocation, useNavigate } from 'react-router-dom';
import CardPreview from '../../../components/CardPreview';
import WindowLoader from '../../../components/WindowLoader';
import { deleteCard } from '../../../network/service/cardService';
import { useDispatch } from 'react-redux';
import { updateCards } from '../../../features/app/appSlice';
import html2canvas from 'html2canvas';
import Cookies from 'js-cookie';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CardViewPage() {

    const classes = useStyles();

    const {state} = useLocation();

    console.log(state);
    const card = state.card;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleDeleteCard = async()=>{
        setLoading(true);
        dispatch(updateCards([]));
        await deleteCard(card._id);
        setLoading(false);
        navigate('/app/cards');
    }

    const downloadQRCode=async()=>{
        const elementToCapture = document.getElementById('qrcode-container');
        const canvas = await html2canvas(elementToCapture);
        const imgDataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = imgDataUrl;
        a.download = 'my-image.png';
        a.click();
    }

    const downloadContact=async()=>{
        const elementToCapture = document.getElementById('contact-container');
        const canvas = await html2canvas(elementToCapture);
        const imgDataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = imgDataUrl;
        a.download = 'my-image.png';
        a.click();
    }

    const handleCopy=async()=>{
        Cookies.set('copy-card-id', card._id);
        navigate('/app/cards/create');
    }

  return (
    <Box className={classes.window}>
        { loading && <WindowLoader/>}
        { isSmallScreen ? <CardViewAppBar/> : <CommonAppBar /> }
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                    <Box className={classes.previewBox}>
                        <div id="contact-container" style={{height: "100%"}}>
                            <CardPreview cardData={card} removeGap={true}/>
                        </div>
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
                                    <IconButton onClick={handleCopy}><PiCopyLight /></IconButton>
                                    <IconButton onClick={downloadQRCode}><PiQrCodeLight /></IconButton>
                                    <IconButton onClick={downloadContact}><PiFilePdfLight /></IconButton>
                                    <IconButton onClick={handleDeleteCard}><PiTrashLight /></IconButton>
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
                                value===1 ? <AnalyticsTabPanel data={card.analytics.length>0 ? card.analytics[0] : null}/> 
                                : <SettingsTabPanel cardId={card?._id} qrVisible={card?.qrVisible} logoInQr={card?.qrWithLogo} pause={card?.status!=="PAUSED"}/>
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