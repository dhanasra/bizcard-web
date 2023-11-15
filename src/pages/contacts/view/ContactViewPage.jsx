import { Drawer, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { FiX } from 'react-icons/fi'
import { PiTrashLight } from 'react-icons/pi'
import theme from '../../../utils/theme';
import CardPreview from '../../../components/CardPreview';

function ContactViewDrawer(props) {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const width = window.innerWidth;

    console.log(props.cardData);

  return (
    <div>
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
            <Toolbar sx={{paddingLeft: "12px", justifyContent: "space-between", background: "#fff"}} variant='dense' disableGutters>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton onClick={()=>props.onClose()} sx={{marginRight: "8px"}}>
                        <FiX fontSize={"22px"} />
                    </IconButton>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '18px' }}>View</Typography>
                </div>

                <IconButton onClick={()=>props.onDelete()} sx={{marginRight: "8px"}}>
                    <PiTrashLight fontSize={"22px"} />
                </IconButton>
            </Toolbar>

            <CardPreview cardData={props.cardData} removeGap={true}/>

        </Drawer>
    </div>
  )
}

export default ContactViewDrawer