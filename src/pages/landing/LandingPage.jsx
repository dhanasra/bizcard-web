import { Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo/logo.png'
import landingPlaceholder from '../../assets/placeholder/landing.png'
import useStyles from './style'
import { useMediaQuery } from '@mui/material';
import theme from '../../utils/theme'

function LandingPage() {
  
  const classes = useStyles();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  console.log(isSmallScreen);

  return (
    <Box className={classes.window}>
      <Toolbar>
        <img src={logo} width={30} height={30} alt="logo"/>
        <Typography variant="h5" sx={{marginLeft: "4px", flexGrow: 1}}>Dizcard</Typography>
        <Button variant="contained" disableElevation>Login</Button>
      </Toolbar>
      <Box className={classes.outerBox}>
        <Box className={`${classes.contentWrapper} ${isSmallScreen? classes.contentWrapperMax: ''}`}>
          <Box className={`${classes.contentLeft} ${isSmallScreen? classes.contentMax: ''}`}>
            <Typography variant="header" color="#fff" >The Leading Digital Business Card Platform</Typography>
            <Typography variant="body" color="#fff" sx={{marginTop: '32px', maxWidth: "70%"}}>Loved by millions worldwide, HiHello helps everyone—from individuals to enterprises—turn each customer touchpoint into a branded, interactive, and measurable opportunity.</Typography>
            <div style={{marginTop: "32px"}}>
              <Button color="inverted" variant="contained" sx={{width: "180px", margin: "8px"}} >Signup Now</Button>
              <Button color="white" variant="outlined" sx={{width: "180px", margin: "8px"}} >Contact</Button>
            </div>
          </Box>
          <Box className={`${classes.contentRight} ${isSmallScreen? classes.contentMax: ''}`}>
            <img src={landingPlaceholder} width={"100%"} alt="logo" style={{objectFit: "cover"}}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage