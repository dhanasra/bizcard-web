import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import Sider from '../../../components/Sider'
import useStyles from './style';
import theme from '../../../utils/theme';
import DisplayForm from './forms/DisplayForm';
import FieldsForm from './forms/FieldsForm';
import GeneralForm from './forms/GeneralForm';
import CardForm from './forms/CardForm';
import BusinessForm from './forms/BusinessForm';
import PhonePreview from '../../../components/PhonePreview';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CreateCardPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box className={classes.window}>
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
                </Box>
                
                {!isSmallScreen && <Box className={classes.previewBox}>
                    <PhonePreview/>
                </Box>}
            </Box>
        </Box>
    </Box>
  )
}

export default CreateCardPage