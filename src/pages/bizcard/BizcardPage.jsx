import { Box, Fab, Skeleton, Typography } from '@mui/material';
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
import { Helmet } from 'react-helmet';

function BizcardPage() {

  const { cardId } = useParams();

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState(null);

  const [openLogin, setOpenLogin] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [openSave, setOpenSave] = useState(false);

  useEffect(()=>{
    const init=async()=>{
        const [data] = await Promise.all([
          getCardPreviewDetails(cardId),
          updateViewCount(cardId),
          updateUniqueViewCount(cardId)
        ]);
        setCardData(data);
        setLoading(false);
    }
    init();
  })

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

  return (
    <>
    <parent>
      <Helmet>
        <meta property="og:title" content="Your Web App Title"/>
        <meta property="og:description" content="Description of your web app"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/bizcard-web.appspot.com/o/constants%2Ferol-ahmed-IHL-Jbawvvo-unsplash.jpg?alt=media&token=b17ffa0f-11d9-48b3-a282-7788b05f80cce" />
        <meta property="og:url" content="https://bizcard-web.web.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
    </parent>

    <SignInDrawer open={openLogin} onClose={()=>setOpenLogin(false)}/>
    <ConnectContactDrawer open={openConnect} onClose={()=>setOpenConnect(false)} cardData={cardData}/>
    <SaveContactDrawer 
      contact={cardData} 
      open={openSave} 
      onClose={()=>setOpenSave(false)} 
      onDownload={()=>download()}
      onShare={(email)=>shareToMail(email)}/>
    <Box sx={{display: "flex", justifyContent: "center", position: "relative", height: "100vh"}}>
        {!loading && <div style={{position: "fixed", bottom: 16, display: "flex", zIndex: 1000}}>
            <Fab variant="extended" color="primary" sx={{width: "150px"}} onClick={()=>handleConnectClick()}>
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
                    <div id={"contact-preview-container"}>
                    <CardPreview cardData={cardData} removeGap={true} />
                    </div>
                </Box>
        }
    </Box>
    </>
  )
}

export default BizcardPage