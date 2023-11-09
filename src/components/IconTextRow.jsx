import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

function IconTextRow({visible, icon, text}) {
  return (
    visible && <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start"}}>
        <ListItemIcon sx={{minWidth: "32px", marginTop: "8px"}}>
            {icon}
        </ListItemIcon>
        <ListItemText 
            sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
            <Typography variant="content" sx={{lineHeight: '1.6'}}>{text}</Typography>
        </ListItemText> 
    </ListItem>
  )
}

export default IconTextRow