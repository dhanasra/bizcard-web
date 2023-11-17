import { Box, ListItem, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PiEyeLight, PiPauseLight, PiQrCodeLight } from 'react-icons/pi'
import { pauseCard, updateQrLogo, updateQrVisible } from '../../../../network/service/cardService';

function SettingsTabPanel(props) {

    const [qrVisible, setQrVisible] = useState(props.qrVisible??false);
    const [logoInQr, setLogoInQr] = useState(props.logoInQr??false);
    const [pause, setPause] = useState(props.pause??false);


    const viewQrInCard=async(event)=>{
        const status = event.target.checked;
        setQrVisible(status);
        await updateQrVisible(status, props.cardId);
    }

    const showLogoInQr=async(event)=>{
        const status = event.target.checked;
        setLogoInQr(status);
        await updateQrLogo(status, props.cardId);
    }

    const disableCard=async(event)=>{
        const status = event.target.checked;
        setPause(status);
        await pauseCard(status, props.cardId);
    }

  return (
    <Box
        sx={{
            p: 3,
            width: "auto",
            display: "flex",
            flexDirection: "column",
        }}
    >
      
      <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer", maxWidth: "500px"}} onClick={()=>{}}>
          <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
              <PiEyeLight fontSize={"24px"}/>
          </ListItemIcon>
          <ListItemText 
              sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
              <Typography variant="body1" >View Qr code in card </Typography>
              <Box>
                  <Typography variant="labelLight">Share your card with qr code.</Typography>
              </Box>
          </ListItemText> 
          <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
              <Switch onChange={viewQrInCard} checked={qrVisible}/>
          </ListItemIcon>
      </ListItem>

      <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer", maxWidth: "500px", marginTop: "24px"}} onClick={()=>{}}>
          <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
              <PiQrCodeLight fontSize={"24px"}/>
          </ListItemIcon>
          <ListItemText 
              sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
              <Typography variant="body1" >Show logo in Qr code</Typography>
              <Box>
                  <Typography variant="labelLight">Personalized qr code with the card logo.</Typography>
              </Box>
          </ListItemText> 
          <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
              <Switch onChange={showLogoInQr} checked={logoInQr}/>
          </ListItemIcon>
      </ListItem>

      <ListItem sx={{px: 0, py: "4px", alignItems: "flex-start", cursor: "pointer", maxWidth: "500px", marginTop: "24px"}} onClick={()=>{}}>
          <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
              <PiPauseLight fontSize={"24px"}/>
          </ListItemIcon>
          <ListItemText 
              sx={{whiteSpace: "normal", wordWrap: "break-word"}}>
              <Typography variant="body1" >Pause card</Typography>
              <Box>
                  <Typography variant="labelLight">You can disable this card, and you can enable at anytime.</Typography>
              </Box>
          </ListItemText> 
          <ListItemIcon sx={{minWidth: "36px", marginTop: "8px", marginRight: "8px"}}>
              <Switch onChange={disableCard} checked={pause}/>
          </ListItemIcon>
      </ListItem>
    
    </Box>
  )
}

export default SettingsTabPanel