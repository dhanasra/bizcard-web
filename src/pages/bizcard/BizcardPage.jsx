import { Box, Fab, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPreview from '../../components/CardPreview';
import { getCardDetails } from '../../network/service/cardService';
import { PiHandshakeLight } from "react-icons/pi";

function BizcardPage() {

  const { cardId } = useParams();

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState(null);

  useEffect(()=>{
    const init=async()=>{
        const data = await getCardDetails(cardId);
        setCardData(data);
        setLoading(false);
    }
    init();
  })

  return (
    <Box sx={{display: "flex", justifyContent: "center", position: "relative", height: "100vh", paddingBottom: "140px"}}>
        {!loading && <Fab variant="extended" color="primary" sx={{position: "fixed", bottom: 16}}>
          <PiHandshakeLight style={{marginRight: "16px", fontSize: "24px"}}/>
           <Typography variant="body2">CONNECT</Typography>
        </Fab>}
        {
            loading
                ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                : <Box sx={{maxWidth: "460px"}}>
                    <CardPreview cardData={cardData} removeGap={true}/>
                </Box>
        }
    </Box>
  )
}

export default BizcardPage