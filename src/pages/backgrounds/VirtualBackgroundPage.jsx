import { Box, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CommonAppBar from '../../components/CommonAppBar'
import Sider from '../../components/Sider'
import useStyles from './style';
import theme from '../../utils/theme';
import { PiMagnifyingGlassLight } from 'react-icons/pi';

function VirtualBackgroundPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.window}>
        <CommonAppBar />
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                    <Box className={classes.toolbar} p={isSmallScreen ? 2: 3}>
                        <Typography variant='h6'>Virtual Backgrounds</Typography>
                        {!isSmallScreen && <TextField 
                            size="small"
                            className={classes.searchField}
                            placeholder={"Search backgrounds here..."}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PiMagnifyingGlassLight style={{marginRight: "4px"}} fontSize={"20px"}/>
                                    </InputAdornment>
                                ),
                            }}  
                        />}
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default VirtualBackgroundPage