import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CommonAppBar from '../../../components/CommonAppBar'
import Sider from '../../../components/Sider'
import useStyles from './style'
import theme from '../../../utils/theme'
import { useSelector } from 'react-redux'
import DataTable from '../../../components/DataTable'

function ContactsListPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const contacts = useSelector((state)=>state.app.contacts);

  return (
    <Box className={classes.window}>
        <CommonAppBar />
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>

                <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                    <Box className={classes.toolbar} p={isSmallScreen ? 2: 3}>
                        <Typography variant='h6'>My Contacts</Typography>
                    </Box>
                    
                    <Box sx={{height: "100%", display: "flex", justifyContent: "center"}}>
                        <DataTable
                            contacts={contacts}
                            isLoading={true}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactsListPage