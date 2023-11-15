import { Box, Fab, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPreview from '../../components/CardPreview';
import { getCardDetails } from '../../network/service/cardService';
import { PiHandshakeLight, PiHeart } from "react-icons/pi";
import ConnectContactDrawer from '../../components/ConnectContactDrawer';
import SaveContactDrawer from '../../components/SaveContactDrawer';

function BizcardPage() {

  const { cardId } = useParams();

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState(null);

  const [openConnect, setOpenConnect] = useState(false);
  const [openSave, setOpenSave] = useState(false);

  useEffect(()=>{
    const init=async()=>{
        const data = await getCardDetails(cardId);
        setCardData(data);
        setLoading(false);
    }
    init();
  })

  return (
    <>
    <ConnectContactDrawer open={openConnect} onClose={()=>setOpenConnect(false)}/>
    <SaveContactDrawer contact={cardData} open={openSave} onClose={()=>setOpenSave(false)}/>
    <Box sx={{display: "flex", justifyContent: "center", position: "relative", height: "100vh", paddingBottom: "140px"}}>
        {!loading && <div style={{position: "fixed", bottom: 16, display: "flex"}}>
            <Fab variant="extended" color="primary" sx={{width: "150px"}} onClick={()=>setOpenConnect(true)}>
              <PiHandshakeLight style={{marginRight: "16px", fontSize: "24px"}}/>
              <Typography variant="body2">CONNECT</Typography>
            </Fab>
            <div style={{width: "40px"}}/>
            <Fab variant="extended" color="primary" sx={{width: "150px"}} onClick={()=>setOpenSave(true)}>
              <PiHeart style={{marginRight: "16px", fontSize: "24px"}}/>
              <Typography variant="body2">SAVE</Typography>
            </Fab>
          </div>}
        {
            loading
                ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                : <Box sx={{maxWidth: "460px"}}>
                    <CardPreview cardData={cardData} removeGap={true}/>
                </Box>
        }
    </Box>
    </>
  )
}

export default BizcardPage