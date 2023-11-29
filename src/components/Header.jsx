import { Avatar, Box, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { CARD_IMAGE_PATH } from '../utils/global';

function Header({visible, logo, id, text, subtext}) {

  return (
    visible && <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start"}}>
        <ListItemIcon sx={{minWidth: "32px", marginTop: "8px", marginRight: "8px"}}>
            <Avatar src={`${CARD_IMAGE_PATH}${id}%2Flogo.jpg?alt=media`}><HiBuildingOffice2 /> </Avatar>
        </ListItemIcon>
        <ListItemText 
            sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
            <Typography variant="titleBold" >{text}</Typography>
            <Box>
                <Typography variant="labelLight">{subtext}</Typography>
            </Box>
        </ListItemText> 
    </ListItem>
  )
}

export default Header