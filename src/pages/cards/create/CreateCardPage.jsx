import { Box, Button, Stack, Tab, Tabs, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import Sider from '../../../components/Sider'
import useStyles from './style';
import theme from '../../../utils/theme';
import DisplayForm from './forms/DisplayForm';
import FieldsForm from './forms/FieldsForm';
import GeneralForm from './forms/GeneralForm';
import CardForm from './forms/CardForm';
import BusinessForm from './forms/BusinessForm';
import CardPreview from '../../../components/CardPreview';
import WindowLoader from '../../../components/WindowLoader';
import { useNavigate } from 'react-router-dom';
import { saveBizcard } from '../../../network/service/cardService';
import { useSelector } from 'react-redux';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CreateCardPage() {

    const classes = useStyles();
    const navigate = useNavigate();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = useState(0);

    const [loading, setLoading] = useState(false);

    const cardData = useSelector((state) => state.cardBuilder.cardData);
    const [updated, setUpdated] = useState({ ...cardData });

    useEffect(() => {
        setUpdated({ ...cardData });
    }, [cardData]);

    const saveCard =async ()=>{
        setLoading(true);
        await saveBizcard(updated);
        setLoading(false);
        navigate("/app/cards");
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box className={classes.window}>

        {loading && <WindowLoader/>}
        
        <CommonAppBar />
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>

                <Box className={`${classes.content} ${isSmallScreen ? `${classes.contentMax} ${classes.gapless}` : ''}`}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', ...isSmallScreen? {width: window.innerWidth}: {} }}>
                        <Tabs 
                            variant={isSmallScreen ? "scrollable": "fullWidth"}
                            allowScrollButtonsMobile
                            value={value} onChange={handleChange} >
                            <Tab label="General" {...a11yProps(0)} sx={{textTransform: "none"}} />
                            <Tab label="Business" {...a11yProps(1)} sx={{textTransform: "none"}} />
                            <Tab label="Display" {...a11yProps(2)} sx={{textTransform: "none"}} />
                            <Tab label="Fields" {...a11yProps(3)} sx={{textTransform: "none"}} />
                            <Tab label="Card" {...a11yProps(4)} sx={{textTransform: "none"}} />
                        </Tabs>
                    </Box>
                    <Box className={classes.scroll} p={3}>
                        {
                            value===0 ? <GeneralForm/> : 
                            value===1 ? <BusinessForm/> : 
                            value===2 ? <DisplayForm/> : 
                            value===3 ? <FieldsForm/> : <CardForm/>
                        }
                    </Box>
                    <Stack direction={"row-reverse"} spacing={2} sx={{background: "#fff", boxShadow: "0px 2px 30px #ccc6", display: "flex",p: 2}}>
                        <Button 
                            variant="contained" 
                            sx={{width: "120px"}} 
                            onClick={saveCard} 
                            disableElevation>Save</Button>
                        <Button variant="outlined" sx={{width: "120px", marginRight: "16px"}}>Cancel</Button>
                    </Stack>
                </Box>
                
                {!isSmallScreen && <Box className={classes.previewBox}>
                    <CardPreview cardData={updated}/>
                </Box>}
            </Box>
        </Box>
    </Box>
  )
}

export default CreateCardPage