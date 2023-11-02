import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import Sider from '../../../components/Sider'
import useStyles from './style';
import theme from '../../../utils/theme';
import DisplayForm from './forms/DisplayForm';
import FieldsForm from './forms/FieldsForm';

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
                <Box className={`${classes.content}`}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs 
                            variant="fullWidth"
                            scrollButtons="auto"
                            value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="General" {...a11yProps(0)} sx={{textTransform: "none"}} />
                            <Tab label="Display" {...a11yProps(1)} sx={{textTransform: "none"}} />
                            <Tab label="Fields" {...a11yProps(2)} sx={{textTransform: "none"}} />
                            <Tab label="Card" {...a11yProps(2)} sx={{textTransform: "none"}} />
                            <Tab label="Settings" {...a11yProps(2)} sx={{textTransform: "none"}} />
                        </Tabs>
                    </Box>
                    <Box className={classes.scroll} p={3} sx={{display: "flex"}}>
                        {
                            value===0 ? <FieldsForm/> : 
                            value===1 ? <DisplayForm/> : <FieldsForm/>
                        }
                    </Box>
                </Box>
                <Box className={classes.previewBox}>

                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default CreateCardPage