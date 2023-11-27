import { Drawer, IconButton, Snackbar, SnackbarContent, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { objectToTextReadableFormat } from '../utils/utils';
import theme from '../utils/theme';
import { Toolbar } from 'mui-rte';
import { FiX } from 'react-icons/fi';

function ShareCardDrawer(props) {

    const [showSnackBar, setShowSnackbar] = useState(false);

    const copyInfo = ()=>{
        const contactInfo = objectToTextReadableFormat('')
        navigator.clipboard.writeText(contactInfo);
        setShowSnackbar(true);
    }

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;

  return (
    <div>
        <Snackbar
            open={showSnackBar}
            autoHideDuration={1500}
            onClose={()=>{setShowSnackbar(false)}}
            severity="success"
        >
            <SnackbarContent
                sx={{
                    backgroundColor: "#139F20"
                }}
                message={"Copied successfully !"}
            />
        </Snackbar>
        <Drawer
            open={props.open} 
            anchor="right"
            sx={{
                padding: "20px",
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    maxWidth: "460px",
                    width: isSmallScreen ? '100%': width
                },
            }}
        >
            <Toolbar sx={{px: 1, justifyContent: "space-between", boxShadow: 1}} variant='dense' >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>Share Card</Typography>
                </div>
                <IconButton onClick={()=>props.onClose()}>
                    <FiX fontSize={"22px"} />
                </IconButton>
            </Toolbar>
        
        </Drawer>
    </div>
  )
}

export default ShareCardDrawer