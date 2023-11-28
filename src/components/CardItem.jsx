import { Box, Chip, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import logo from '../assets/logo/logo.png'
import { useNavigate } from 'react-router-dom';
import { CARD_IMAGE_PATH } from '../utils/global';

const useStyles = makeStyles((theme) => ({
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  }));


function CardItem({card}) {

    const classes = useStyles();

    const navigate = useNavigate();

  return (
    <Box 
        onClick={
            ()=>navigate(
                // `/app/p/card/${card._id}`,
                '/app/cards/view', 
                { state: { card: card }}
            )
        }
        sx={{
            cursor: "pointer",
            background: "#fff", 
            height: "200px", 
            width: "100%", 
            borderRadius: "6px",
            display: "flex",
            boxShadow: "0px 2px 30px #ccc6"
        }}>

            <Box
                sx={{
                    width: "50%",
                    p: 3, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <img src={logo} width={30} height={30} alt='logo'/>
                    <Typography variant="body1">{card.name?.prefix} {card.name?.firstName} {card.name?.middleName} {card.name?.lastName}</Typography>
                    <Typography variant="caption">{card.company?.title}</Typography>
                </div>

                <div>
                    <Chip label={card?.cardName} color="secondary"/>
                </div>
            </Box>
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    position: "relative"
                }}
            >
                { (card.picture || card.logo || card.banner) &&
                    <img 
                        alt=""
                        height="100%"
                        style={{
                            position: "relative",
                            borderRadius: "0 6px 6px 0"
                        }}
                        className={classes.image}
                        src={`${CARD_IMAGE_PATH}${card._id}%2F${card.picture? 'profile': card.logo ? 'logo': 'banner'}.jpg?alt=media`}
                    />
                }
                <Box
                    sx={{   
                        left: "-10px",
                        position: "absolute",
                        transform: "skew(6deg)",
                        background: "#fff",
                        width: "12%",
                        height: "100%"
                    }}
                ></Box>
            </Box>
    </Box>
  )
}

export default CardItem