import { Box, Chip, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import React from 'react'
import logo from '../assets/logo/logo.png'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  }));


function CardItem() {

    const classes = useStyles();

    const navigate = useNavigate();

  return (
    <Box 
        onClick={()=>navigate('/app/cards/view')}
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
                    <Typography variant="body1">Dhana Sekaran R</Typography>
                    <Typography variant="caption">Flutter Developer</Typography>
                </div>

                <div>
                    <Chip label="Work" color="secondary"/>
                </div>
            </Box>
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    position: "relative"
                }}
            >
                <img 
                    alt="pictur"
                    height="100%"
                    style={{
                        position: "relative",
                        borderRadius: "0 6px 6px 0"
                    }}
                    className={classes.image}
                    src={"https://cloud.githubusercontent.com/assets/6893715/21904006/e307032c-d8b6-11e6-9e4a-52dccfedf8a5.jpg"}
                />
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