import { Box, Fab, Skeleton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardPreview from '../../components/CardPreview';
import { getCardPreviewDetails } from '../../network/service/cardService';
import { PiHandshakeLight, PiHeart } from "react-icons/pi";
import ConnectContactDrawer from '../../components/ConnectContactDrawer';
import SaveContactDrawer from '../../components/SaveContactDrawer';
import html2canvas from 'html2canvas';
import { checkCookies } from '../../utils/utils';
import SignInDrawer from '../../components/SignInDrawer';
import { updateAnalytics, updateUniqueViewCount, updateViewCount } from '../../network/service/analyticsService';

let count = 0;

function BizcardPage() {

  const { cardId } = useParams();

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState(null);

  const [openLogin, setOpenLogin] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  
  const isAlreadyConnected = window.contacts && (window.contacts?.some((contact)=>contact.card._id===cardId)); 
  const [isConnected, setIsConnected] = useState(isAlreadyConnected);

  const isLoggedIn = checkCookies();
  const isOwnCard = window.cards && (window.cards?.some((item)=>item._id===cardId));  

  useEffect(()=>{
    const init = async () => {
      try {
        setLoading(true);

        const [data] = await Promise.all([
          getCardPreviewDetails(cardId),
          (count===0) && updateViewCount(cardId),
          (count===0) && updateUniqueViewCount(cardId),
        ]);
        count++;
        setCardData(data);
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    init();
  }, [cardId])

  const handleConnectClick=()=>{

    const isLoggedIn = checkCookies();

    if(isLoggedIn){
      setOpenConnect(true);
    }else{
      setOpenLogin(true);
    }

  }

  const shareToMail=async(email)=>{
    const elementToCapture = document.getElementById('contact-preview-container');
    const canvas = await html2canvas(elementToCapture);
    const imgDataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = imgDataUrl;
    a.download = 'my-image.png';
    a.click();
    await updateAnalytics(cardId, "share");
  }

  const download=async()=>{
    const elementToCapture = document.getElementById('contact-preview-container');
    const canvas = await html2canvas(elementToCapture);
    const imgDataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = imgDataUrl;
    a.download = 'my-image.png';
    a.click();
    await updateAnalytics(cardId, "save");
  }

  const handleConnected = ()=>{
    setIsConnected(true);
    setOpenConnect(false);
  }

  return (
    <div >

    <SignInDrawer open={openLogin} onClose={()=>setOpenLogin(false)}/>
    <ConnectContactDrawer open={openConnect} onClose={()=>setOpenConnect(false)} onConnected={handleConnected} cardData={cardData}/>
    <SaveContactDrawer 
      contact={cardData} 
      open={openSave} 
      onClose={()=>setOpenSave(false)} 
      onDownload={()=>download()}
      onShare={(email)=>shareToMail(email)}/>
    <Box sx={{display: "flex", justifyContent: "center", position: "relative", height: "100vh"}}>
        {!loading && <Stack direction={"row"} sx={{position: "fixed", bottom: 16, display: "flex", zIndex: 1000}} spacing={3}>
            
            { (isLoggedIn && !isOwnCard && !isConnected) && <Fab variant="extended" color="primary" sx={{width: "150px"}} onClick={()=>handleConnectClick()}>
              <PiHandshakeLight style={{marginRight: "16px", fontSize: "24px"}}/>
              <Typography variant="body2">CONNECT</Typography>
            </Fab>}
            
            <Fab variant="extended" color="primary" sx={{width: "150px"}} onClick={()=>setOpenSave(true)}>
              <PiHeart style={{marginRight: "16px", fontSize: "24px"}}/>
              <Typography variant="body2">SAVE</Typography>
            </Fab>

          </Stack>}
        {
            loading
                ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                : <Box sx={{maxWidth: "420px", }}>
                    <div id={"contact-preview-container"} style={{height: "calc(100% - 16px)"}}>
                    <CardPreview cardData={cardData} removeGap={true} showCreateProfile={!isLoggedIn} />
                    </div>
                </Box>
        }
    </Box>
    </div>
  )
}

export default BizcardPage