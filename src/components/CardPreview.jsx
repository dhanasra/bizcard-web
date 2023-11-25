import { Avatar, Box, Divider, Grid, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import { FiGlobe, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import IconTextRow from './IconTextRow';
import Header from './Header';
import HtmlViewer from './HtmlViewer';
import { anyNotEmpty, designs, getDesign, getFieldIcon } from '../utils/utils';

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
        borderRadius: "4px",
        width: "100%",
        height: "100%",
    },
    content: {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
    },
    gapLess: {
        background: "none",
        margin: "16px",
        padding: "0px"
    },
    previewContainer: {
        minHeight: "100%",
        height: "fit-content",
        backgroundColor: "#fff",
        border: "1px solid rgb(189, 189, 189)",
        borderRadius: "25px 25px 0 0",
        flexGrow: 1,
        boxSizing: "border-box"
    }
})

function CardPreview({cardData, removeGap}) {

    const classes = useStyle();

    // const cardData = useSelector((state) => state.cardBuilder.cardData);

    const primaryColor = "#6DD3C7"
    const background = "#fff"

    const cardDesign = cardData?.design??designs[0].name;

  return (
    <Box className={`${ removeGap && classes.gapLess} ${classes.outerbox} `}>
        <div className={classes.previewContainer}>
        <Box className={classes.screen}>
            <Box className={classes.content} >
                { cardData?.picture && <div
                    style={{
                        position: "relative",
                        height: "280px"
                    }}
                >

                    {
                        cardData?.picture && cardData?.banner && <Avatar
                            src={cardData?.picture}
                            sx={{
                                width: 84, 
                                height: 84,
                                zIndex: 1000,
                                position: "absolute", 
                                bottom: "10%",
                                right: "10%"
                            }}
                        />
                    }
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            background: primaryColor,
                            backgroundImage: `url(${cardData.banner ?? cardData.picture})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: "25px",
                            position: "absolute", 
                        }}
                    />

                   {cardDesign!=="flat" && <Box sx={{width: "100%",  marginBottom: "-4px", position: "absolute", bottom: 0}}>
                        <img src={getDesign(cardDesign).wave} alt="Wave SVG" style={{background: "#00000000"}}/>
                    </Box> }
                </div> }
                
                <Box px={2} sx={{background: background, paddingBottom: "32px", paddingTop: "16px", borderRadius: "32px"}}>
                    
                    <Box py={0}>
                        <Typography variant="titleBold">{cardData?.name?.prefix} {cardData?.name?.firstName} {cardData?.name?.middleName} {cardData?.name?.lastName}</Typography>
                        <Box>
                            <Typography variant="labelLight">{cardData?.company?.title}</Typography>
                        </Box>
                    </Box>
                    <Box py={'8px'}>
                        <Typography variant="paragraph">{cardData?.bio}</Typography>
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
                        logo={cardData?.logo}
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

                    { cardData?.fields && <Grid container alignItems={"center"} justifyContent={"center"} spacing={2}>
                        {cardData.fields.map((field)=>(
                            <Grid item key={field._id} sm={2}>
                                <Avatar sx={{background: "#fff", boxShadow: "0px 2px 30px #ccc6", cursor: "pointer"}}>
                                    <img src={`https://firebasestorage.googleapis.com/v0/b/bizcard-web.appspot.com/o/${getFieldIcon(field.id)}`} width={32} height={32} alt={""}/>
                                </Avatar>
                            </Grid>
                        ))}  
                    </Grid> }

                </Box>
                


            </Box>

        </Box>
        </div>
    </Box>
  )
}

export default CardPreview