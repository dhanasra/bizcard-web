import { Box, Button, Divider, Grid, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CommonAppBar from '../../components/CommonAppBar'
import Sider from '../../components/Sider'
import useStyles from './style';
import theme from '../../utils/theme';
import ImagePickerPlaceholder from '../../components/ImagePickerPlaceholder';
import { PiArrowRight, PiCheckCircleLight, PiEnvelopeLight, PiLockKeyLight, PiTrash } from 'react-icons/pi';

function SettingsPage() {

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
                        <Typography variant='h6'>Settings</Typography>
                        <Button 
                            variant="contained" 
                            sx={{width: "120px"}} 
                            onClick={()=>{}} 
                            disableElevation>Save</Button>
                    </Box>
                    <Box className={classes.scroll} px={isSmallScreen ? 2: 3}>

                        <Grid container rowSpacing={4} columnSpacing={2}>
                            <Grid item md={6} xs={12}>
                                <Box py={2}>
                                    <Typography variant="titleBold">Profile</Typography>
                                    <Box>
                                        <Typography variant="labelLight">Edit profile details</Typography>
                                    </Box>
                                </Box>

                                <ImagePickerPlaceholder />

                                <div style={{height: "24px"}}/>

                                <Grid container>
                                    <Grid item md={8} xs={12}>
                                        <Stack direction={"row"} spacing={2}>
                                            <TextField label={"First Name"} fullWidth/>
                                            <TextField label={"Last Name"} fullWidth/>
                                        </Stack>
                                        <div style={{height: "24px"}}/>
                                        <TextField label={"Title"} fullWidth/>
                                        <div style={{height: "24px"}}/>
                                        <TextField label={"Company"} fullWidth/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box py={2}>
                                    <Typography variant="titleBold">Account</Typography>
                                    <Box>
                                        <Typography variant="labelLight">Manage account details</Typography>
                                    </Box>
                                </Box>
                                <Stack spacing={2}>
                                    <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer"}} onClick={()=>{}}>
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiEnvelopeLight fontSize={"28px"}/>
                                        </ListItemIcon>
                                        <ListItemText 
                                            sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
                                            <Typography variant="body1" >Change Email Address</Typography>
                                            <Box>
                                                <Typography variant="labelLight">1dhana625@gmail.com</Typography>
                                            </Box>
                                        </ListItemText> 
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiArrowRight fontSize={"28px"}/>
                                        </ListItemIcon>
                                    </ListItem>

                                    <Divider/>

                                    <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer"}} onClick={()=>{}}>
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiCheckCircleLight fontSize={"28px"}/>
                                        </ListItemIcon>
                                        <ListItemText 
                                            sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
                                            <Typography variant="body1" >Verify Email Address</Typography>
                                            <Box>
                                                <Typography variant="labelLight">Get a verified badge in your card</Typography>
                                            </Box>
                                        </ListItemText> 
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiArrowRight fontSize={"28px"}/>
                                        </ListItemIcon>
                                    </ListItem>

                                    <Divider/>

                                    <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer"}} onClick={()=>{}}>
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiLockKeyLight fontSize={"28px"}/>
                                        </ListItemIcon>
                                        <ListItemText 
                                            sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
                                            <Typography variant="body1" >Reset password</Typography>
                                            <Box>
                                                <Typography variant="labelLight">Update your account password</Typography>
                                            </Box>
                                        </ListItemText> 
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiArrowRight fontSize={"28px"}/>
                                        </ListItemIcon>
                                    </ListItem>

                                    <Divider/>

                                    <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer"}} onClick={()=>{}}>
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiTrash fontSize={"28px"}/>
                                        </ListItemIcon>
                                        <ListItemText 
                                            sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
                                            <Typography variant="body1" >Delete Account</Typography>
                                            <Box>
                                                <Typography variant="labelLight">All your cards will be invalid</Typography>
                                            </Box>
                                        </ListItemText> 
                                        <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
                                            <PiArrowRight fontSize={"28px"}/>
                                        </ListItemIcon>
                                    </ListItem>

                                    <Divider/>
                                </Stack>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box py={2}>
                                    <Typography variant="titleBold">Subscription</Typography>
                                    <Box>
                                        <Typography variant="labelLight">Update your Plan</Typography>
                                    </Box>
                                </Box>
                                <Box p={2} sx={{border: "1px solid #cccd", maxWidth: "320px", borderRadius: "3px", display: "flex", justifyContent: "space-between"}}>
                                    <Stack>
                                        <Typography variant="labelLight">Current plan</Typography>
                                        <Typography variant="body1">Bizcard Free</Typography>
                                    </Stack>
                                    <Button variant="contained" color="secondary">Upgrade</Button>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box py={2}>
                                    <Typography variant="titleBold">Advanced</Typography>
                                    <Box>
                                        <Typography variant="labelLight">Export your contacts</Typography>
                                    </Box>
                                </Box>
                                <Box py={2} sx={{borderRadius: "3px", display: "flex", justifyContent: "center"}}>
                                    <Button variant="contained">Export</Button>
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default SettingsPage