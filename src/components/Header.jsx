import { Avatar, Box, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Header({visible, logo, text, subtext}) {
  return (
    visible && <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start"}}>
        <ListItemIcon sx={{minWidth: "32px", marginTop: "8px", marginRight: "8px"}}>
            <Avatar />
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