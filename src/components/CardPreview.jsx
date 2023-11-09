import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import { FiGlobe, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import IconTextRow from './IconTextRow';
import Header from './Header';
import HtmlViewer from './HtmlViewer';
import { anyNotEmpty, getFieldIcon } from '../utils/utils';

const useStyle = makeStyles({
    outerbox: {
        marginTop: "16px",
        marginRight: "16px",
        display: "flex",
        height: "100%",
        overflow: "auto",
        background: "#fff", 
        padding: "16px",
        boxShadow: "0px 2px 30px #ccc6",
        boxSizing: "border-box",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
            display: "none",
          },
    },
    screen: {
        background: "#fff",
        borderRadius: "4px",
        width: "100%",
        height: "100%",
    },
    content: {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        background: "#fff", 
        borderRadius: "4px",
        boxShadow: "0px 2px 30px #ccc6"
    },
})

function CardPreview() {

    const classes = useStyle();

    const cardData = useSelector((state) => state.cardBuilder.cardData);

  return (
    <Box className={classes.outerbox}>
        <Box className={classes.screen}>
            <Box className={classes.content}>
                <Box
                    sx={{
                        width: "100%",
                        height: "50px",
                        background: "#6DD3C7",
                        borderRadius: "16px 16px 0 0"
                    }}
                />

                <Box sx={{width: "auto", height: "70px"}}>
                    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"#6DD3C7"}}></path>
                    </svg>
                </Box>
                
                <Box px={2} py={3}>
                    
                    <Box py={2}>
                        <Typography variant="titleBold">{cardData?.name?.prefix} {cardData?.name?.firstName} {cardData?.name?.middleName} {cardData?.name?.lastName}</Typography>
                        <Box>
                            <Typography variant="labelLight">{cardData?.company?.title}</Typography>
                        </Box>
                    </Box>

                    <IconTextRow 
                        visible={cardData?.phoneNumber}
                        icon={<FiPhone/>}
                        text={cardData?.phoneNumber}
                    />

                    <IconTextRow 
                        visible={cardData?.email}
                        icon={<FiMail/>}
                        text={cardData?.email}
                    />

                    <IconTextRow 
                        visible={cardData?.address}
                        icon={<FiMapPin/>}
                        text={`${cardData?.address?.addressLine1??""} ${cardData?.address?.addressLine2??""} ${cardData?.address?.city??""} ${cardData?.address?.state??""} ${cardData?.address?.country??""} ${cardData?.address?.pincode??""}`}
                    />

                    { anyNotEmpty(cardData?.company??{}) && <Divider sx={{my: 3}}/>}

                    <Header
                        visible={cardData?.company?.companyName || cardData?.company?.department}
                        text={cardData?.company?.companyName}
                        subtext={cardData?.company?.department}
                    />

                    <IconTextRow 
                        visible={cardData?.company?.companyWebsite}
                        icon={<FiGlobe/>}
                        text={cardData?.company?.companyWebsite}
                    />

                    <HtmlViewer content={cardData?.company?.companyDescription??""}/>


                    { (cardData?.fields??[]).length>0 && <Divider sx={{my: 3}}>
                        <Typography variant="caption" sx={{textAlign: "center", flexGrow: 1}}>Follow Me On</Typography>
                    </Divider> }

                    { cardData?.fields && <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={2}>
                        {cardData.fields.map((field)=>(
                            <Avatar sx={{background: "#fff", boxShadow: "0px 2px 30px #ccc6", cursor: "pointer"}}>
                                <img src={`https://firebasestorage.googleapis.com/v0/b/bizcard-web.appspot.com/o/${getFieldIcon(field.id)}`} width={32} height={32} alt={""}/>
                            </Avatar>
                        ))}  
                    </Stack> }

                </Box>
                


            </Box>

        </Box>
    </Box>
  )
}

export default CardPreview