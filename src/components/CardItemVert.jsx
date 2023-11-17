import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { designs, getDesign } from '../utils/utils';

function CardItemVert({cardData, onTap}) {

    const cardDesign = cardData?.design??designs[0].name;
    const primaryColor = "#6DD3C7"

  return (
            <Box
                onClick={()=>onTap()}
                sx={{
                    cursor: "pointer",
                    background: "#fff", 
                    height: "200px", 
                    width: "100%", 
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 2px 30px #ccc6"
                }}
            >

                { cardData?.picture && <div
                    style={{
                        position: "relative",
                        height: "110px"
                    }}
                >

                    {
                        cardData?.picture && cardData?.banner && <Avatar
                            src={cardData?.picture}
                            sx={{
                                width: 55, 
                                height: 55,
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
                            borderRadius: "4px 4px 0 0",
                            position: "absolute", 
                        }}
                    />

                   {cardDesign!=="flat" && <Box sx={{width: "100%",  marginBottom: "-4px", position: "absolute", bottom: 0}}>
                        <img src={getDesign(cardDesign).wave} alt="Wave SVG" style={{background: "#00000000"}}/>
                    </Box> }
                </div> }

        <Box p={2}>
            <Typography variant="titleBold">{cardData?.name?.firstName} {cardData?.name?.lastName}</Typography>
            <Box>
                <Typography variant="labelLight">{cardData?.company?.title}</Typography>
            </Box>
        </Box>

    </Box>
  )
}

export default CardItemVert